import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types';



import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import './styles/Card.css';
import { DataContext } from '../Helpers/Context';



const Card = ({imgUrl, title , desc, desc2,gitUrl, demoUrl, techList}) => {

  const style = {
    display : 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '800px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const {contextSkin} = useContext(DataContext)

  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};


  const HandlerGit = () =>{
    window.open(`${gitUrl}`, '_blank')
  }

  const HandlerDemo = () =>{
    window.open(`${demoUrl}`, '_blank')
  }



  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={contextSkin ? 'modal-dark' : 'modal'}>
          <div className={contextSkin ? 'modalImg modalImg-dark' : 'modalImg'}>
            <img src={imgUrl} alt="" />
          </div>

          <div className={contextSkin ? 'modalBody modalBody-dark' : 'modalBody'}>
            <p 
              className={contextSkin ? 'modalTitle modalTitle-dark' : 'modalTitle'}
              >
              {title}
            </p>
            <p 
              className={contextSkin ? 'modalDesc-dark modalDesc' : 'modalDesc'  }
              >
                {desc2 ? desc2 : desc}
            </p>
            <p className={contextSkin ? 'modalDesc-dark modalDesc' : 'modalDesc'  }>Tecnologias aplicadas:</p>
            <div className={contextSkin ? "modalTechs modalTechs-dark" : "modalTechs"}>
              {techList.map((t) => {
                return (
                  <p className={contextSkin ? 'modalTech modalTech-dark' : 'modalTech'}>{t}</p>
                )
              })}
            </div>
          </div>
        </Box>
      </Modal>

      <div className={contextSkin? 'card card-dark' : 'card'} onClick={handleOpen}>
          <img src={imgUrl} alt="" />
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className={contextSkin? 'buttons-card buttons-card-dark' : 'buttons-card'}>
            {
              demoUrl 
              ? 
                <button onClick={HandlerDemo}>View Demo</button>
              : 
                ''
            }
            {
              gitUrl 
              ? 
                <button onClick={HandlerGit}>View GitHub Repo</button> 
              : 
                ''
            }
            
          </div>
      </div>
    </>
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