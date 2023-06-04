import React, { useState, useEffect} from "react"
import axios from "axios"
import styles from './perfilGitHub.module.css'

const PerfilGitHub = () => {
    const [followers, setFollowers] = useState(0)
    const [following, setFollowing] = useState(0)
    const [publicRepos, setPublicRepos]= useState([])

    useEffect(() => {
        async function getSates() {
          try {
            const response = await axios.get('https://api.github.com/users/yureribeiro', {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB}`
              }
            })
            setFollowers(response.data.followers)
            setFollowing(response.data.following)
            setPublicRepos(response.data.public_repos)
          } catch (error) {
            console.log(error)
          }
        }   
        getSates()
        
      }, [])

    return (
      <>
        <div className={styles.container}>
            <p className={styles.bio}>Desenvolvedor JavaScript</p>
            <div className={styles.contentStates}>
                <div className={styles.content}>
                  <p className={styles.text}>Seguidores</p>
                  <p className={styles.value}>{followers}</p>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>Seguindo</p>
                    <p className={styles.value}>{following}</p>
                </div>
            </div>
        </div>
        <div className={styles.content}>
            <p className={styles.text}>Rep. públicos</p>
            <p className={styles.value}>{publicRepos}</p>
        </div>
        </>
    )
}

export default PerfilGitHub