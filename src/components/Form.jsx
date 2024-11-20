import React from 'react'
import styles from '../style'
import Button from './Button'
import emailjs from "@emailjs/browser"
import sendCustomEmail from './sendCustomEmail'
import { useState } from "react";



const Form = () => {
  const [details, setDetails] = useState({
    from_name: "",
    message: "",
    from_email: "",
  });

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };
  const handleSendEmail = () => {
    sendCustomEmail(details);
  };
  return (
    
      <div className={`${styles.paragraph} main static`} >
      <div>
      <div>
        <span>Nom et Prénom</span>
        <input
          name="from_name"
          value={details.from_name}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Requis"
          style={{float:  "right"}}
        />
      </div>
      <div>
        <span>Adresse mail</span>
        <input
          name="from_email"
          value={details.from_email}
          onChange={handleDetailsChange}
          type="email"
          placeholder="Requis"
          style={{float:  "right"}}
        />
      </div>
      <div>
        <span>Message</span>
        <textarea
          name="message"
          value={details.message}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Requis"
          style={{float:  "right"}}
        />
      </div>
      </div>
      <Button disabled={!details.from_email || !details.from_name || !details.message}
        onClick={handleSendEmail} text="Contactez-nous"  style={{float:"center"}} />

    </div>
      
     
  )
}

export default Form


/* 
Abandonné car trop lent, mais complétement gratuit
      <form action="https://formsubmit.co/joseph.kawalec@coeur-net.fr" method="POST">
          Name
          <input type="text" name="name" required></input> <br></br>
          Email
          <input type="email" name="email" required></input><br></br>
          <button type="submit">Send</button>
     </form> */