import React from 'react'
import { apple, bill, google, article1 } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> <span className='text-gradient'> Simplifiez vos accès logiques et physiques  </span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
        Avec notre technologie vous bénéficiez d'un système capable de déverrouiller vos accès logiciels, en n'ayant plus aucun mot de passe à gérer. Les gestionnaires de mots de passe deviennent inutiles et l'authentification MFA classique par SMS ou autres devient superflue.
        De plus, vous bénéficiez également d'un système permettant de déverrouiller les accès physiques, capable de remplacer les badges d'accès RFID, peu sécurisés et vulnérables ainsi que les lecteurs biométriques couteux et inadaptés à l'authentification continue, telle que recommandée par la norme NIS-2 qui entre en vigueur en Europe et en France. Le bracelet permet ainsi d'ouvrir des portes, des véhicules, des zones à accès restreint, etc.
        
        </p>
        
      </div>
      
      <div className={layout.sectionImgReverse}>
        <img
          src={article1}
          alt='article1'
          className='w-[100%] h-[100%] relative z-[5]'
        />
       
      </div>  
    </section>
  )
}

export default Billing
