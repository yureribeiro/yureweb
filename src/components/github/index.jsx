import React, { useEffect, useState } from "react"
import axios from "axios"

import styles from './github.module.css'

const GithubStates = () => {
  const [commits, setCommits] = useState([])

  const user = "yureribeiro"

  useEffect(() => {
    async function getStates() {
      try {
        const userReposResponse = await axios.get(`https://api.github.com/users/${user}/repos`, {
        headers: {
            Authorization: `token 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`
          }
        })

        const userRepos = userReposResponse.data
  
        const commitsPromises = userRepos.map(async repo => {
          const commitsResponse = await axios.get(`https://api.github.com/repos/${user}/${repo.name}/commits`)
          return commitsResponse.data
        })
  
        const commitsData = await Promise.all(commitsPromises)
        const allCommits = commitsData.flat()

        setCommits(allCommits)
      } catch (error) {
        console.log(error)
      }
    }
  
    getStates()
  }, [])
  

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Github States</h1>
        <div className={styles.contentCommit}>
          <p className={styles.textCommits}>Total de commits: {commits.length}</p>
        </div>
    </div>
  )
}

export default GithubStates