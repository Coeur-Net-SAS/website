import React from 'react'
import { 
  Billing, 
  Business, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats,
  Article1,
  Article2,
  Carousel,
  Testimonials,
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary  overflow-hidden'>
      <div className={`main-element ${styles.flexCenter} navbar z-[10] `} >
        <div className={`${styles.boxWidth} navbar`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary main-element ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary main-element ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`}>
          {/*<Stats/>*/}
          <Business/>
          <Article1/>
          <Article2/>

          <Testimonials/>
          <Carousel/>
          {/*<CarouselPartenaire/>
          {<Clients/>*/}
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App