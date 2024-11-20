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
  Contact,
  Form
} from './components'
import styles from './style'
import { TbTextColor } from 'react-icons/tb'

const NosServices = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`} style={{position: "static"}}>
        <div className={`${styles.boxWidth}`} style={{position: "static"}}>
          <Navbar style={{position: "static"}} />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} style={{position: "static"}}>
        <div className={`${styles.boxWidth}`}>
        <CardDeal />
        <CTA></CTA>
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

export default NosServices