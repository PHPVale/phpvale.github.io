import React from 'react'

import { Link } from 'react-router-dom'

import Logo from './../../assets/images/logo-phpvale.png'

import './styles.scss'

export default () => {

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={Logo} alt="PHPVale" />
        </Link>
      </header>
    </>
  )

}