import React from 'react'
import styles from "./Header.module.css"

import { SocialIcon } from 'react-social-icons';

function Header() {
  return (
    <>

    <header>
      <div className={styles.left_icons}>
        <SocialIcon
        className={styles.Icon1}
        url='https://www.linkedin.com/in/gui-barbosamxm/' target="_blank"
        bgColor='transparent'
        fgColor='#EFEFEFEF' />

        <SocialIcon
        className={styles.Icon2}
        
        url='https://github.com/GuiMXM/' target="_blank"
        bgColor='transparent'
        fgColor='#EFEFEFEF' />
        
        <SocialIcon
        className={styles.Icon3}
        url='https://api.whatsapp.com/send?phone=5586988510533' target="_blank"
        bgColor='transparent'
        fgColor='#EFEFEFEF' />
        
      </div>

        <div className={styles.right_icons}>
          <SocialIcon
          className={styles.cursor}
          network='email'
          bgColor='transparent'
          fgColor='#EFEFEFEF'/>
          
          <p>Entre em contato</p>
        </div>
      </header>

      
    </>
    
  )
}

export default Header