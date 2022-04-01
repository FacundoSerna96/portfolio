import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import { DataContext } from '../Helpers/Context';

import './styles/Contact.css';

import Phone from '../assets/telefono-claro.png';
import PhoneDark from '../assets/telefono-oscuro.png';


import 'animate.css';
import useOnScreen from '../Hooks/useOnScreen'

const Contact = () => {

  const [enviado, setEnviado] = useState(false)

  //para mandar email
  //con la libreria emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7jvwxtc', 'template_1xwqagl', e.target, 'q85jz7eaHTaJie90g')
      .then((result) => {
          setEnviado((m) => m = true);
          console.log('OK');
      }, (error) => {
          console.log(error.text);
      });
  };



  const {contextSkin} = useContext(DataContext);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div className='contact' id='contact'>
      <div className={contextSkin? 'contact-image contact-image-dark' : 'contact-image'}>
        <h1>Contactame!</h1>
        <img src={contextSkin? PhoneDark : Phone} alt="" className='phone'/>
      </div>

      <div ref={ref} 
        className={isVisible? 'contact-form animate__animated animate__fadeInUp' : 'displayHidden'}>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className='suavisado'  placeholder='Nombre' />
          <input type="email" name="from_email" className='suavisado' placeholder='Email' />
          <textarea name="message" className='suavisado' cols="30" rows="1" placeholder='Escribi tu mensaje'></textarea>
          <input className='contact-button suavisado' type="submit" value="Enviar" />
          <div className={enviado? 'enviado' : 'displayOff'}>
            <p className={contextSkin? 'enviado-dark' : 'enviado'}>El mensaje fue enviado exitosamente.</p>
          </div>
        </form>

        

      </div>
    </div>
  )
}

export default Contact