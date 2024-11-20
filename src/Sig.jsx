import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
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
import Signature from './components/Signature'

const Sig = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} style={{position: "static"}}>
        <div className={`${styles.boxWidth}`}>
        <Signature/>
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

export default Sig