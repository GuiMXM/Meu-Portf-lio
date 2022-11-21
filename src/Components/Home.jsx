import styles from './Home.module.css'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'












function Home() {
   
    
    return(
        
         
         <div className={styles.Home_wrapper}>
            
           <div className={styles.circle}>
                  <h1>
                     <TypeWriting/>
                  </h1>
                <p > <Link to='About'
                       smooth={true}
                       delay={50}
                       duration={550}
                        offset={-70}
                        >Sobre
                        </Link> </p>
                <p > <Link to='Skills'
                       smooth={true}
                       delay={50}
                       duration={550}
                        offset={-90}
                        >Skills</Link> </p>
                <p> 
                    <Link to='MyProjects'
                       smooth={true}
                       delay={50}
                       duration={550}
                       offset={-90}
                        >Projetos </Link>
                </p>
            </div>
                     
            
        </div>
    )
     
    
}
function TypeWriting(){
    return (

       <div>
            <Typewriter words={["O nome é Guilherme Barbosa","<Front End Developer/>", `React-enthusiast.jsx`]}
            loop={true} 
            Cursor={true}
            delaySpeed={2000}
            typeSpeed={90}
            deleteSpeed={35}
            />
           <Cursor cursorColor="white" cursorStyle='|'/>
        </div>
    )

}


export default Home