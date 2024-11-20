import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Fonctionnement1,
  Fonctionnement2,
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Carousel,
  Techstack,
  Testimonials,
  CarouselPartenaire,
  Contact2,
  Form
} from './components'
import styles from './style'
import Authentification from './components/Authentification'

const Auth = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} style={{position: "static"}}>
        <div className={`${styles.boxWidth}`}>
        <Fonctionnement1/>
        <Fonctionnement2/>
        <CTA/>
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

export default Auth