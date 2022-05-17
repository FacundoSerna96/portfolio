import React, { useContext } from 'react'
import PropTypes from 'prop-types';

import './styles/Card.css';
import { DataContext } from '../Helpers/Context';

const Card = ({imgUrl, title , desc, gitUrl, demoUrl}) => {

  const {contextSkin} = useContext(DataContext)

  const HandlerGit = () =>{
    window.open(`${gitUrl}`, '_blank')
  }

  const HandlerDemo = () =>{
    window.open(`${demoUrl}`, '_blank')
  }

  const handleModal = () => {
    alert('modal')
  }

  return (
    <div className={contextSkin? 'card card-dark' : 'card'} onClick={handleModal}>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className={contextSkin? 'buttons-card buttons-card-dark' : 'buttons-card'}>
          <button onClick={HandlerDemo}>view project</button>
          <button onClick={HandlerGit}>view github repo</button>
        </div>
    </div>
  )
}

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired
};


export default Card