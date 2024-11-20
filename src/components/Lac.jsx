import React from 'react'
import { apple, img_lac, google } from '../assets'
import styles, { layout } from '../style'

const Lac = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={img_lac}
          alt='Lac'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[75%] h-[75%] rounded-full green__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> <span className='text-gradient'> Contrôle d'accès Logiciel </span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Avec Coeur-Net, déverouillez vos sessions, vos logiciels métiers, votre suite bureatique, 
          vos comptes et réseaux sociaux professionels, facilement,  sans mots de passe, ni tokens physiques ou lecteurs biométriques. 
          Simplement en portant le bracelet.
        </p>
        
      </div>  
    </section>
  )
}

export default Lac
