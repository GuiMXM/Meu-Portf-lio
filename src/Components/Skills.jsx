import React from 'react'

import styles from './Skills.module.css';
import SkillCard from './SkillCard/SkillCard';

import GitHub  from '../assets/images/gitIcon.png'
import CSS  from '../assets/images/icons-css.png'
import HTML  from '../assets/images/icons-html.png'
import Javascript  from '../assets/images/icons-JS.png'
import Figma  from '../assets/images/icons-figma.png'
import Tailwind  from '../assets/images/icons-tailwind.png'
import react from '../assets/images/icons-react.png'

function Skills() {

  const icons = [Figma,GitHub,HTML,CSS,Javascript,react,Tailwind]
  const title = ["Figma","GitHub","HTML","CSS","Javascript","React","TailwindCss" ]
  return (
    <>
    <div className={styles.Skills} id='Skills'>
        <h1>My Skills</h1>
      <div className={styles.line}></div>

      <div className={styles.mainWrapper}>
        {title.map((title,id)=>
        
          <SkillCard key={id} Icon={icons[id]} Title={title}/>
        )
        }
      </div>
      
      
    </div>
    </>
  )
}

export default Skills