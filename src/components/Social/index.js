import React from 'react'

import { FaFacebook, FaTwitter, FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa'

import './styles.scss'

export default () => {

  return (
    <div className="social">
      <a href="https://www.facebook.com/developers.do.vale" className="icon fa-2x" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com/phpvale" className="icon fa-2x" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://github.com/PHPVale" className="icon fa-2x" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://t.me/joinchat/CfuMTUbUybj7tLBH2FQ-MQ" className="icon fa-2x" target="_blank" rel="noopener noreferrer">
        <FaTelegram />
      </a>
      <a href="mailto:contato.phpvale@gmail.com" className="icon fa-2x" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />  
      </a>
    </div>
  )
  
}