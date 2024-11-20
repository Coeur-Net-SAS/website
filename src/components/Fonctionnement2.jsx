import { discount, bill } from '../assets'
import styles, { layout } from '../style'

const Fonctionnement2 = () => {
  return (
    <section id='fonctionnement2' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt='billing'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      <div className='absolute z-[3] -left-1/2 top-0 w-[75%] h-[75%] rounded-full green__gradient'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> <span className='text-gradient'> Toujours authentifié </span></h2>
      <p className={`${styles.paragraph} max-w-[95%] mt-5`}>
       Avec notre système d'authentification biométrique, il vous suffit de porter un bracelet pour vous authentifier en toute sécurité.
       </p>
       <p className={`${styles.paragraph} max-w-[95%] mt-5`}>
       Notre bracelet est équipé d'un capteur cardiaque simillaire à celui des montres connectées.
       </p>
       <p className={`${styles.paragraph} max-w-[95%] mt-5`}>
       Il mesure votre signal cardiaque et l'envoie à un serveur contenant une intelligence artificielle spécifique.
       <br></br>Cette dernière est capable de reconnaitre les individus en fonction de leur signal cardiaque.
       <br></br>Elle peut donc certifier l'identité de chaque porteur de bracelet, et autoriser ou non l'accès à un service ou un lieu.
      </p>
      
    </div>  
  </section>

  )}

export default Fonctionnement2
