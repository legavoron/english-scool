import './screensaver.css';
import logo from './img/english-card-logo.png';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Screensaver = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/main')
    }, 2000)
  }, [])
  return (
    <div className="screensaver">
        <div className="logoContainer">
            <img src={logo} alt="english-cards" className='logoImage'/>
        </div>
        <h1 className='screensaver_heading'>А1 Elementary</h1>
    </div>
)
}

export default Screensaver;