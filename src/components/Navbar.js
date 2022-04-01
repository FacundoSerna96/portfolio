import React, { useContext, useState } from 'react'

import LogoOscuro from '../assets/logo-oscuro.png';
import LogoClaro from '../assets/logo-claro.png';

import { DataContext } from '../Helpers/Context';
import './styles/Navbar.css';


const Navbar = () => {

  const {contextSkin, setContextSkin} = useContext(DataContext)

  const [menuOn, setMenuOn] = useState(false);

  const [skin, setSkin] = useState(false);
  const [textoSkin, setTextoSkin] = useState('Dark Mode')

  const HandlerMenu = () => {
    if(menuOn){
      setMenuOn(false);
    }else{
      setMenuOn(true);
    }
  }

  const HandlerSkin = () => {
    if(skin){
      setSkin(false);
      setTextoSkin((t) => t='Dark Mode');

      setContextSkin(false)
    }else{
      setSkin(true);
      setTextoSkin((t) => t='Light Mode');

      setContextSkin(true)
    }
  }

 const globalStyle = `
                    body {
                      background-color : ${contextSkin? '#1D131D' : '#EAE7DC'};
                    }
                    a {
                      color: ${contextSkin? '#281D22' : '#EAE7DC'};
                    }
          `;

  return (
    <div className='Navbar'>
    
      {/* Permite cambiar el color a toda la pagina */}
      <style jsx={'true'} global={'true'}>{globalStyle}</style>

      
      <div className="logo">
        <a href="#/" className=''>
          <img src={contextSkin? LogoClaro : LogoOscuro} alt="" className='logo-img'/>
        </a>
        <button className='buttonNavbar' onClick={HandlerMenu}>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>

      <nav className={menuOn? 'navOn' : 'nav'}>

        <div className={contextSkin? 'enlaces enlaces-dark' : 'enlaces'}>
          <li>
            <div className='square'></div><a href="#about">About me</a>
          </li>
          <li>
            <div className='square'></div><a href="#skills">Skills</a>
          </li>
          <li>
            <div className='square'></div><a href="#experience">Experience</a>
          </li>
          <li>
            <div className='square'></div><a href="#contact">Contact</a>
          </li>
        </div>

        <div className="skinButton">
          <button className={skin? 'button-skin button-skin-dark' : 'button-skin button-skin-light'} 
            onClick={HandlerSkin}>
            <div className='text-skin'>{textoSkin}</div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="adjust" className="eclipse rotate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>
          </button>
        </div>     
      </nav>      
    </div>
  )
}

export default Navbar