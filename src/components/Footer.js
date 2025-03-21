import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/Footer.css';

function Footer() {

  const {contextSkin} = useContext(DataContext)
  const {language} = useContext(DataContext)

  
  return (
    <div className='footer'>
      {
        language
        ?
        <div className={contextSkin? 'credits credits-dark' : 'credits'}>
        <p>Todos los derechos reservados © 2025</p>
        <p>Ilustrado por Carla Quinteros</p>    
      </div>
        :
        <div className={contextSkin? 'credits credits-dark' : 'credits'}>
        <p>All rights reserved © 2025</p>
        <p>Illustrated by Carla Quinteros</p>    
      </div>
      }
      
    </div>
  )
}

export default Footer