import React from 'react'
import { 
  Cgu,
  Navbar,
  Footer
} from './components'
import styles from './style'


const CGU = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} style={{position: "static"}}>
        <div className={`${styles.boxWidth}`}>
        <Cgu/>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default CGU