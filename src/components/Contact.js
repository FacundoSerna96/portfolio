import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { DataContext } from "../Helpers/Context";

import "./styles/Contact.css";

import Phone from "../assets/telefono-claro.png";
import PhoneDark from "../assets/telefono-oscuro.png";

import "animate.css";
import useOnScreen from "../Hooks/useOnScreen";

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSendError(false);
    if (e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "") {
      setError(true);
      return;
    }
    setError(false);
    enviarMail(e);
  };

  const enviarMail = (e) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_7jvwxtc",
        "template_1xwqagl",
        e.target,
        "q85jz7eaHTaJie90g"
      )
      .then(
        () => {
          setLoading(false);
          setEnviado(true);
        },
        () => {
          setLoading(false);
          setSendError(true);
        }
      );
  };

  const { contextSkin, language } = useContext(DataContext);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const submitLabel = loading
    ? null
    : language ? "Enviar" : "Send";

  return (
    <div className="contact" id="contact">
      <div className="contact-image">
        <span className="section-label">
          {language ? "04 — Hablemos" : "04 — Let's talk"}
        </span>
        {language ? <h1>Contactame!</h1> : <h1>Contact me!</h1>}
        <img src={contextSkin ? PhoneDark : Phone} alt="" className="phone" />
      </div>

      <div
        ref={ref}
        className={
          isVisible
            ? "contact-form animate__animated animate__fadeInUp"
            : "displayHidden"
        }
      >
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="suavisado"
            placeholder={language ? "Nombre" : "Name"}
          />
          <input
            type="email"
            name="from_email"
            className="suavisado"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="suavisado"
            placeholder={language ? "Escribí tu mensaje" : "Type your message"}
          ></textarea>

          <button
            className="contact-button"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <span className="contact-spinner" />
            ) : (
              submitLabel
            )}
          </button>

          {enviado && (
            <div className="contact-feedback contact-feedback--success">
              <span className="contact-feedback-dot" />
              {language ? "Mensaje enviado exitosamente." : "Message sent successfully."}
            </div>
          )}
          {error && (
            <div className="contact-feedback contact-feedback--warn">
              <span className="contact-feedback-dot" />
              {language ? "Por favor completá todos los campos." : "Please fill in all the fields."}
            </div>
          )}
          {sendError && (
            <div className="contact-feedback contact-feedback--error">
              <span className="contact-feedback-dot" />
              {language ? "Hubo un error al enviar. Intentá de nuevo." : "Something went wrong. Please try again."}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
