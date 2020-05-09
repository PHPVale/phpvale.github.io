import React from 'react'

import { FaFacebook, FaTwitter, FaMeetup, FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa'

import Logo from './../../../assets/images/logo-phpvale.png'

import './styles.scss'

export default () => {
  return (
    <section className="sections">
      <img src={Logo} alt="PHPVale" />

      <div className="_margin-bt-50 _center">
        <h2 className="-uppercase">Bem-vindo ao PHPVale</h2><br />
        <h3 className="-uppercase">Grupo de desenvolvedores PHP do Vale do Paraíba</h3>
      </div>

      <div className="social">
        <a href="https://www.phpvale.com.br" className="fa-2x" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.phpvale.com.br" className="fa-2x" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.phpvale.com.br" className="fa-2x" target="_blank" rel="noopener noreferrer">
          <FaMeetup />
        </a>
        <a href="https://www.phpvale.com.br" className="fa-2x" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.phpvale.com.br" className="fa-2x" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a href="https://www.phpvale.com.br" className="fa-2x" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />  
        </a>
      </div>
    </section>
  )
}