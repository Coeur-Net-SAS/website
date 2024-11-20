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
  CarouselPartenaire 
} from './components'
import styles from './style'
import { TbTextColor } from 'react-icons/tb'

const Partners = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
          <Navbar style={{position: "absolute"}}/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <br>
        </br>
        <br>
        </br>
        <CarouselPartenaire/>
        </div>
      </div>
      <CTA></CTA>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default Partners