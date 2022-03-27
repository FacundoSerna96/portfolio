import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/Footer.css';

function Footer() {

  const {contextSkin} = useContext(DataContext)
  
  return (
    <div className='footer'>
      <div className={contextSkin? 'credits credits-dark' : 'credits'}>
        <p>Todos los derechos reservados © 2022</p>
        <p>Ilustrado por Carla Quinteros</p>    
      </div>
    </div>
  )
}

export default Footer