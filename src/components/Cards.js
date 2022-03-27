import React from 'react'
import Card from './Card'

import PropTypes from 'prop-types';

import './styles/Cards.css';



const Cards = ({isExp = true}) => {
  return (
    <div className='cards'>
        <div className="cards-exp" style={{display: isExp ? 'grid' : 'none' }}>
          <Card 
            imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
            title='Gestión de ventas Alpha'
            desc='registro y control de ventas, turnos, instructores y alumnos.'
            gitUrl=''
            demoUrl=''/>
          <Card 
            imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
            title='Gestión de ventas Alpha'
            desc='registro y control de ventas, turnos, instructores y alumnos.'
            gitUrl=''
            demoUrl=''/>
          <Card 
            imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
            title='Gestión de ventas Alpha'
            desc='registro y control de ventas, turnos, instructores y alumnos.'
            gitUrl=''
            demoUrl=''/>
        </div>

        <div className="cards-projects" style={{display: isExp ? 'none' : 'grid' }}>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Gestión de ventas Alpha'
              desc='registro y control de ventas, turnos, instructores y alumnos.'
              gitUrl=''
              demoUrl=''/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Gestión de ventas Alpha'
              desc='registro y control de ventas, turnos, instructores y alumnos.'
              gitUrl=''
              demoUrl=''/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Gestión de ventas Alpha'
              desc='registro y control de ventas, turnos, instructores y alumnos.'
              gitUrl=''
              demoUrl=''/>
              <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Gestión de ventas Alpha'
              desc='registro y control de ventas, turnos, instructores y alumnos.'
              gitUrl=''
              demoUrl=''/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Gestión de ventas Alpha'
              desc='registro y control de ventas, turnos, instructores y alumnos.'
              gitUrl=''
              demoUrl=''/>
            <Card 
              imgUrl='https://themes.getbootstrap.com/wp-content/uploads/2019/06/1200x900-1-1200x900.png'
              title='Gestión de ventas Alpha'
              desc='registro y control de ventas, turnos, instructores y alumnos.'
              gitUrl=''
              demoUrl=''/>
        </div>
    </div>
  )
}



Cards.propTypes = {
  isExp: PropTypes.bool.isRequired
};


export default Cards