import React from 'react'
import styles from './SkillCard.module.css';





const SkillCard = (props) => {

 
   
  return (
    <>
       
            <div className={styles.cardWrapper} >

                <img src={props.Icon} alt="gitHub" />

                <h2>{props.Title}</h2>
                 
            </div>
        
    </>
  )
}

export default SkillCard