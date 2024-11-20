import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Cgu = () => {
  return (
    <section id='cgu' className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> <span className='text-gradient'> Mentions Légales </span></h2>
        <p className={`${styles.paragraph} max-w-[95%] mt-5`}>
        Ce site est édité par la société  <span className='text-gradient'> Coeur-Net </span>.

        <br />
        <br />
        <span className='text-gradient'>Siège social</span> : Coeur-Net, Rue de la Société Française, Le B3, Vierzon, 18 100<br />
        <span className='text-gradient'>Capital social</span> : 45 000 euros<br />
        <span className='text-gradient'>SIRET</span> : 922 210 430 00026<br />
        <span className='text-gradient'>Contact</span> : contact@coeur-net.
        
        <br />
                  
        Aucune information personnelle n'est collectée à votre insu.

        <br />
        <br />
        <span className='text-gradient'>Droit d'auteur / copyright</span>
        <br />          
        L'ensemble du contenu du présent site Internet, y compris nom de domaine, marques, logo, texte etc. ormis les contenus open-source et les logos des partenaires, est la propriété de la société Coeur-Net, il est protégé par les lois en vigueur de la législation française sur la propriété intellectuelle.
        <br />       
        <br />   
        Aucun élément de ce site ne peut être copié, reproduit, détourné ou dénaturé, et ce, sur quelque support que ce soit, sans constituer un acte de contrefaçon au sens des articles L 335-2 et suivants du code de la propriété intellectuelle. 
        <br />  
        <br />
        <span className='text-gradient'>Accès au site</span>
        <br />  
        L'utilisateur de ce site reconnaît disposer de la compétence et des moyens nécessaires pour accéder et utiliser ce site. Coeur-Net ne saurait être tenu responsable des éléments en dehors de son contrôle et des dommages qui pourraient éventuellement être subis par l'environnement technique de l'utilisateur et notamment, ses ordinateurs, logiciels, équipements réseaux et tout autre matériel utilisé pour accéder ou utiliser le service et/ou les informations.
        <br />   
        <br />        
        Il est rappelé que le fait d'accéder ou de se maintenir frauduleusement dans un système informatique, d'entraver ou de fausser le fonctionnement d'un tel système, d'introduire ou de modifier frauduleusement des données dans un système informatique constitue des délits passibles de sanctions pénales.
        <br />
        <br />
        
        <span className='text-gradient'>Limitation de responsabilité</span>
        <br />     
        
                  
        Les liens hypertextes mis en oeuvre au sein du présent site Internet, en direction d'autres sites et/ou de pages personnelles et d'une manière générale vers toutes ressources existantes sur Internet, ne sauraient engager la responsabilité de Coeur-Net.
        De même que la société Coeur-Net  ne pourra en aucune façon être tenue pour responsable des sites ayant un lien hypertexte avec le présent site et décline toute responsabilité quant à leur contenu et à leur utilisation.
        </p>       
      </div>  
    </section>
  )
}

export default Cgu
