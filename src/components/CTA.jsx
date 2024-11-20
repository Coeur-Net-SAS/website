import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Dites adieu aux mots de passe !</h2>
        <p className={`${styles.paragraph} max-w-[40em] mt-5`}>
          Simplifiez vous la vie avec nos bracelets connectés.<br></br>
          Faites avancer votre technologie et votre sécurité.<br></br>
          Contactez nous.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button text="Contactez-nous" link="mailto:contact@coeur-net.fr"/>
      </div>
    </section>
  )
}

export default CTA
