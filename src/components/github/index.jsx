import React, { useEffect, useState } from "react"
import axios from "axios"
import styles from './github.module.css'

import Linguages from "../../components/linguages"

const GithubStates = () => {
  const [repos, setRepos] = useState([])
  const [commits, setCommits] = useState(0)

  useEffect(() => {
    if (repos.length > 0) {
      getCommits()
    }
  }, [repos])

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

  console.log(commits)

  return (
    <div className={styles.container}>
        <div className={styles.contentCommit}>
          <p className={styles.textCommits}>commits públicos:</p>
          <p className={styles.textCommits}>{commits}</p>
        </div>
          <div className={styles.contentRepos}>
            <p className={styles.text}>Repos públicos:</p>
            { repos.map((item) => {
              return (
                <div key={item.id} className={styles.repos}>
                  <p  className={styles.textCommits}>{item.name}</p>
                </div>
                )
              })
            }
          </div>
        <Linguages />
    </div>  
  )
}

export default GithubStates