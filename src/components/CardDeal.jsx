import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'
import Techstack from './Techstack'
import {
  DiPython,
  DiGit,
  DiAndroid,
  DiAws,
  DiWindows
} from "react-icons/di";

const CardDeal = () => {
  return (
    <section id='techno' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> <span className='text-gradient'> Boostez votre <br className='sm:block hidden'/>R&D </span> </h2>
        <p className={`${styles.paragraph} `}>
        Cybersécurité, Intelligence Artificielle, Big Data, IoT, Cloud, etc. Nous pouvons vous accompagner dans vos projets de R&D, de l'analyse à la réalisation du prototype. Nous pouvons réaliser un audit et vous orienter dans vos démarches de certification. Nous pouvons aussi vous aider dans votre recherche de finnancements pour vos projets.
        </p>
      </div>
      <div className={layout.sectionInfo}>               
        <Techstack/> 
      </div>
    </section>
  )
}

export default CardDeal
