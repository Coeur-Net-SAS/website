import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} py-12 flex-col xl:px-0 sm:px-16 px-6`}>

      <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            La nouvelle <br className='sm:block hidden'/> {" "}
          <span className='text-gradient'>génération</span> {" "}
          </h1>
  {/* <div className='ss:flex hidden md:mr-4 mr-0'>
    <GetStarted/>
  </div> */}
      </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          d'authentifications  <span className='text-gradient'>biométriques</span>
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Nous développons de nouvelles méthodes d'authentifications biométriques cardiaques pour sécuriser vos données 
        et vos accès avec une simplicité déconcertante. 
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='billing'
          className='w-[90%] h-[90%] relative z-[5]'
        />
        <div className="absolute w-[40%] h-[35%] top-0 green__gradient" />
        <div className="absolute w-[80%] h-[80%] rounded-full green__gradient bottom-40" />
        <div className="absolute w-[50%] h-[50%] right-20 bottom-20 green__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
