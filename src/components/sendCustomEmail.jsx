var VITE_EMAIL_SERVICE_ID = "service_rtgr4l8"
var VITE_EMAIL_TEMPLATE_ID = "template_aaux8h6"
var VITE_EMAIL_USER_ID  = "b-4p9YIIJ9qC0l_uB"
import emailjs from "@emailjs/browser"

const sendCustomEmail = (details) => {
    // initialize using your User ID saved in the .env file
    emailjs.init(VITE_EMAIL_USER_ID);
    emailjs
      .send(
        VITE_EMAIL_SERVICE_ID, // The service ID saved in the .env file
        VITE_EMAIL_TEMPLATE_ID, // The template ID also saved in the .env file
        // Start of the variables defined in the template earlier
        {
          from_email: details.from_email,
          from_name: details.from_name,
          message: details.message,
        }
        // End of the variables defined in the template earlier
      )
      .then((response) => {
        // Debug statement on the console to show the function has been executed successfully
        console.log(response);
      })
      .catch((error) => {
        // Debug statement on the console to show the error that occured
        console.log(error);
      });
  };
  export default sendCustomEmail 