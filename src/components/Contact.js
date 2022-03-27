import React, { useContext, useRef } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/Contact.css';

import Phone from '../assets/telefono-claro.png';
import PhoneDark from '../assets/telefono-oscuro.png';


import 'animate.css';
import useOnScreen from '../Hooks/useOnScreen'

const Contact = () => {

  const {contextSkin} = useContext(DataContext)

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
        <form action="">
          <input type="text" name="" className='suavisado'  placeholder='Nombre'/>
          <input type="email" name="" className='suavisado' placeholder='Email'/>
          <textarea name="" className='suavisado' cols="30" rows="1" placeholder='Escribi tu mensaje'></textarea>
          <button className='contact-button suavisado'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact