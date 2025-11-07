import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    user_email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const data = {
      access_key: "eef3a463-50f1-4c38-a435-746387b90263",
      from_name: formData.user_email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setStatus(
          "Merci ! Votre message a bien été envoyé. Un membre de notre équipe prendra contact avec vous très bientôt."
        );
        setFormData({ user_email: "", subject: "", message: "" });
      } else {
        setStatus(
          "Oups ! Nous n’avons pas pu envoyer votre message. Veuillez réessayer dans quelques instants."
        );
      }
    } catch (error) {
      console.error("Erreur :", error);
      setStatus("Erreur réseau ou serveur.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
  className="mt-3 p-4 rounded shadow position-relative"
  style={{
    backgroundColor: "var(--bs-dark)",
    filter: "brightness(1.2)"
  }}
>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#555",
        }}
        aria-label="Fermer"
      >
        ✕
      </button>

      <h2 className="text-center mb-3 fw-bold text-dark">Contactez-nous</h2>

      {status && (
        <p
          className="text-center mb-2 fw-semibold"
          style={{ color: "#28a745" }}
        >
          {status}
        </p>
      )}

      {isSending && (
        <div className="d-flex justify-content-center mb-3">
          <div
            className="spinner-border text-primary"
            style={{ width: "2.5rem", height: "2.5rem" }}
            role="status"
          >
            <span className="visually-hidden">Envoi...</span>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`d-flex flex-column align-items-center ${isSending ? "opacity-50" : ""}`}
      >
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          value={formData.user_email}
          onChange={handleChange}
          required
          className="form-control mb-3"
          style={{ width: "60%", borderRadius: "10px", fontSize: "0.95rem", padding: "8px 10px" }}
        />
        <input
          type="text"
          name="subject"
          placeholder="Objet"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-control mb-3"
          style={{ width: "60%", borderRadius: "10px", fontSize: "0.95rem", padding: "8px 10px" }}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-control mb-3"
          rows={4}
          style={{ width: "60%", borderRadius: "10px", fontSize: "0.95rem", padding: "8px 10px" }}
        />
        <button
          type="submit"
          className="btn btn-primary mt-2 fw-semibold shadow-sm"
          style={{ width: "30%", borderRadius: "25px", padding: "8px 0", fontSize: "1rem" }}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

const contactElements = [
  document.getElementById("contactButton"),
  document.getElementById("footerContactButton"),
  document.getElementById("PartenaireContactButton"),
];

contactElements.forEach((el) => {
  if (el) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const container = document.getElementById("ContactFormContainer");
      const root = createRoot(container);

      const closeForm = () => root.unmount();

      root.render(<ContactForm onClose={closeForm} />);
    });
  }
});

export default ContactForm;
