import React from 'react'
import styles from './Projects.module.css'



const MyProjects = () => {



  return (
    <div className={styles.Project} id="MyProjects">
        <h1>My Projects</h1>
        <div className={styles.line}></div>
        <div className={styles.skew}></div>

      <div className={styles.projCardWrapper}>
        <div className={styles.projectCard}>
          <p>Caso de estudo</p>
        </div>
        <div className={styles.projectCard}>
          <p>DOIS</p>
        </div>
        <div className={styles.projectCard}>
          <p>Caso de estudo</p>
        </div>
      </div> 
    </div>
  )
}

export default MyProjects