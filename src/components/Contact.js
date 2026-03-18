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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(verificarDatos(e));
  };

  const verificarDatos = (e) => {
    if (e.target[0].value === "") return true;
    if (e.target[1].value === "") return true;
    if (e.target[2].value === "") return true;
    enviarMail(e);
    return false;
  };

  const enviarMail = (e) => {
    emailjs
      .sendForm(
        "service_7jvwxtc",
        "template_1xwqagl",
        e.target,
        "q85jz7eaHTaJie90g"
      )
      .then(
        () => setEnviado(true),
        (error) => console.log(error.text)
      );
  };

  const { contextSkin, language } = useContext(DataContext);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

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
        {language ? (
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="suavisado"
              placeholder="Nombre"
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
              placeholder="Escribí tu mensaje"
            ></textarea>
            <input
              className="contact-button"
              type="submit"
              value="Enviar"
            />
            <div className={enviado ? "enviado" : "displayOff"}>
              <p>El mensaje fue enviado exitosamente.</p>
            </div>
            {error && (
              <div className="enviado">
                <p>Por favor complete todos los datos.</p>
              </div>
            )}
          </form>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="suavisado"
              placeholder="Name"
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
              placeholder="Type your message"
            ></textarea>
            <input
              className="contact-button"
              type="submit"
              value="Send"
            />
            <div className={enviado ? "enviado" : "displayOff"}>
              <p>The message was sent successfully.</p>
            </div>
            {error && (
              <div className="enviado">
                <p>Please fill in all the fields.</p>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
