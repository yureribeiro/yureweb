import React, { useEffect, useState } from "react"
import axios from "axios"
import styles from './github.module.css'

const GithubStates = () => {
  const [repos, setRepos] = useState([])
  const [commits, setCommits] = useState([])

  useEffect(() => {
    async function getRepos() {
      try {
        const responseRepos = await axios.get('https://api.github.com/users/yureribeiro/repos', {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB}`
          }
        })
        setRepos(responseRepos.data)
      } catch (error) {
        console.log(error)
      }
    }   
    getRepos()
    getCommits()
  }, [])

  async function getCommits() {
    let total = 0

    await Promise.all(repos.map(async (repo) => {
      try {
        const response = await axios.get(`https://api.github.com/repos/yureribeiro/${repo.name}/commits`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB}`
          }
        })
        total += response.data.length;
      } catch (error) {
        console.log(error)
      }
    }))
    setCommits(total)
  }
  
  useEffect(() => {
    if (repos > 0) {
      getCommits()
    }
  }, [repos])

  console.log(repos)

  return (
    <div className={styles.container}>
        <div className={styles.contentRepos}>
          { repos.map((item) => {
            return (
              <div key={item.id} className={styles.repos}>
                <p  className={styles.textCommits}>{item.name}</p>
              </div>
              )
            })
          }
        </div>
       
        <div className={styles.contentCommit}>
          <p className={styles.textCommits}>commits públicos: {commits}</p>
        </div>
    </div>  
  )
}

export default GithubStates