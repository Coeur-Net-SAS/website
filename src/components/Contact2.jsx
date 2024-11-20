import React from 'react'
import styles from '../style'
import Button from './Button'
import Form
 from './Form'
import emailjs from "@emailjs/browser"
import sendCustomEmail from './sendCustomEmail'
import { useState } from "react";


const Contact2 = () => {

  const [details, setDetails] = useState({
    subject: "",
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
    <section class="bg-white dark:bg-[#000000]">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight text-gradient font-extrabold text-center text-gray-900 dark:text-white">Contactez nous</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-[#56a991] dark:text-[#56a991] sm:text-xl">Vous voulez plus de détail ? Une démonstration pour vos équipes ? Contactez nous !</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-xl font-medium text-[#56a991] dark:text-[#56a991]">Votre email</label>
              <input name="from_email"
                value={details.from_email}
                onChange={handleDetailsChange} 
                type="email" id="email" 
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-xl font-medium text-[#56a991] dark:text-[#56a991]">Sujet</label>
              <input 
              name="subject"
              value={details.subject}
              onChange={handleDetailsChange}
              type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dites nous comment vous aider" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-xl font-medium text-[#56a991] dark:text-[#56a991]">Votre message</label>
              <textarea 
              name="message"
              value={details.message}
              onChange={handleDetailsChange}
              id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Décrivez votre problème"></textarea>
          </div>
          <div className='ml-96'>
          <button disabled={!details.from_email || !details.subject || !details.message} onClick={handleSendEmail} type="submit" class="ml-5 py-3 px-5 text-xl font-large text-center text-white rounded-lg bg-[#56a991] sm:w-fit hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer le message</button>
          </div>
      </form>
  </div>
</section>
  )
}

export default Contact2
