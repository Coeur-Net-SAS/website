import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Signature = () => {
  return (
    <section id='product' >
      <div className={layout.section}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[75%] h-[75%] rounded-full green__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> <span className='text-gradient'> Signez d'un <br className='sm:block hidden'/> simple geste </span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Avec notre système d'authentification biométrique, vous pouvez signer vos documents électronique en un seul et unique simple geste.
          Plus besoin de scanner, d'imprimer ou de signer manuellement vos documents.
          Bénéficiez d'une signature électronique valable juridiquement et rapide. 
          Notre technologie permet de signer par un simple clic. Pour une sécurité, vous pouvez choisir d'ajouter à votre profil une signature à main levée ou un geste libre.
        </p>
        
      </div>
      </div>
      <div className={layout.section}>
        <p className={`${styles.paragraph}`}>
          Paragraphe supplementaire
          </p>
      </div>
    </section>
    
  )
}

export default Signature
