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

  //para mandar email
  //con la libreria emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(verificarDatos(e));
  };

  const verificarDatos = (e) => {
    if (e.target[0].value === "") {
      return true;
    } else if (e.target[1].value === "") {
      return true;
    } else if (e.target[2].value === "") {
      return true;
    } else {
      enviarMail(e);
      return false;
    }
  };

  const enviarMail = (e) => {
    //si todo salio bien se envia el mensaje
    emailjs
      .sendForm(
        "service_7jvwxtc",
        "template_1xwqagl",
        e.target,
        "q85jz7eaHTaJie90g"
      )
      .then(
        (result) => {
          setEnviado((m) => (m = true));
          console.log("OK");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { contextSkin } = useContext(DataContext);
  const { language } = useContext(DataContext);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div className="contact" id="contact">
      <div
        className={
          contextSkin ? "contact-image contact-image-dark" : "contact-image"
        }
      >
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
              cols="30"
              rows="1"
              placeholder="Escribi tu mensaje"
            ></textarea>
            <input
              className="contact-button suavisado"
              type="submit"
              value="Enviar"
            />
            <div className={enviado ? "enviado" : "displayOff"}>
              <p className={contextSkin ? "enviado-dark" : "enviado"}>
                El mensaje fue enviado exitosamente.
              </p>
            </div>

            {error ? (
              <div className={"enviado"}>
                <p className={contextSkin ? "enviado-dark" : "enviado"}>
                  Por favor complete todos los datos.
                </p>
              </div>
            ) : (
              ""
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
              cols="30"
              rows="1"
              placeholder="Type your message"
            ></textarea>
            <input
              className="contact-button suavisado"
              type="submit"
              value="Send"
            />
            <div className={enviado ? "enviado" : "displayOff"}>
              <p className={contextSkin ? "enviado-dark" : "enviado"}>
                The message was sent successfully.
              </p>
            </div>

            {error ? (
              <div className={"enviado"}>
                <p className={contextSkin ? "enviado-dark" : "enviado"}>
                  Please fill in all the fields
                </p>
              </div>
            ) : (
              ""
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
