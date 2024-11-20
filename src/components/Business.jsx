import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex sticky z-0 flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className={ styles.heading3}>
        {title}
      </h4>
      <p className={ styles.paragraph2}>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}><span className='text-gradient'>  Oubliez  mots de passes et badges</span><br className='sm:block hidden'/></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Avec notre technologie qui se présente sous la forme d'un bracelet, vous n'avez plus besoin de mots de passes, de badges d'accès, 
          ou de lecteurs biométriques. Le bracelet vous reconnait et vous octroie les accès. S'il est retiré, perdu, ou volé, les accès sont vérrouillés.
          
          Profitez ainsi d'une sécurité renforcée et d'une simplicité d'utilisation.
        </p>
        <Button styles='mt-10' text='En savoir plus' link="/auth"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
