import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}> <span className='text-gradient'> <br className='sm:block hidden'/> Notre équipe </span> </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Notre équipe est constitué de ses deux fondateurs Benjamin et Patrice, chercheurs en cybersécurité, dans l'équipe 
           <a href="https://www.univ-orleans.fr/lifo/equipe.php?id=4"> <span className='text-solid-color2_charte_primary_blue'> Sécurité des Données 
            et des Systèmes (SDS) du Laboratoire d'informatique Fondamentale d'Orléans</span></a>, 
           localisée à l'<a href="https://www.insa-cvl.fr"> <span className='text-solid-color2_charte_primary_blue'> INSA Centre Val de Loire</span></a>. Elle est également constituée de Joseph, 
           un alumni de l'INSA, spécialiste en cybersécurité. 
           La technologie développée chez Coeur-Net est une valorisation des travaux de recherche académique menés par les fondateurs.
          </p>  
        </div>
      </div>     
    </section>
  )
}

export default Testimonials
