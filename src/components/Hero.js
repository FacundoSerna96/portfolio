import React, { useContext } from 'react'

import './styles/Hero.css';

//efecto maquina de escribir
import Typewriter from 'typewriter-effect';

import Laptop from '../assets/laptop-claro.gif'
import LaptopDark from '../assets/laptop-oscuro.gif';
import { DataContext } from '../Helpers/Context';


function Hero() {
  const {contextSkin} = useContext(DataContext)


  return (
    <div className='hero'>
      <div className='title'>
        <h1 className={contextSkin? 'h1-dark': ''}>Hola! <span className={contextSkin? 'text-dark' : 'text-red'}>Soy Facundo</span></h1>
      </div>

      <div className={contextSkin? 'typewriter-dark' : 'typewriter'}>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Y soy desarollador full stack junior')
              .pauseFor(2500)
              .changeDeleteSpeed(30)
              .deleteAll()
              .typeString('Manejo el stack MERN :)')
              .pauseFor(2500)
              .start();
          }}/>
      </div>

      <div className='separator'></div>

      {/* Cargo la laptop-dark antes y no lo muestro
          de esa forma no hay latencia entre
          una imagen y otra al cambiar el tema */}
      <img style={{display:'none'}} src={LaptopDark} alt="" />

      <img className='hero-image' src={contextSkin? LaptopDark: Laptop} alt="" />

    </div>
  )
}

export default Hero