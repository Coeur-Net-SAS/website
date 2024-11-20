import { discount, cardiac_server } from '../assets'
import styles, { layout } from '../style'

const Fonctionnement1 = () => {
  return (
    <section id='fonctionnement1' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} py-12 flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            Utilisez  {" "}
            <span className='text-gradient'>votre coeur</span> {" "}
          </h1>
          {/* <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div> */}
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          comme une clé
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Portez un simple bracelet et ne vous occupez plus d'aucun mot de passe, badge ou clé ! 
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={cardiac_server}
          alt='billing'
          className='w-[90%] h-[90%] relative z-[5]'
        />
        <div className="absolute w-[40%] h-[35%] top-0 green__gradient" />
        <div className="absolute w-[80%] h-[80%] rounded-full green__gradient bottom-40" />
        <div className="absolute w-[50%] h-[50%] right-20 bottom-20 green__gradient"/>
      </div>

   </section>
  )
}

export default Fonctionnement1
