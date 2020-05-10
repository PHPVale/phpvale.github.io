import React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import Social from './../../../components/Social'

import Logo from './../../../assets/images/logo-phpvale.png'

import './styles.scss'

export default () => {
  return (
    <section className="sections">
      <img src={Logo} alt="PHPVale" />

      <div className="_margin-t-50 _center">
        <h2 className="-uppercase">Bem-vindo ao PHPVale</h2><br />
        <h3 className="-font-normal">Grupo de desenvolvedores PHP do Vale do Paraíba</h3>
      </div>

      <AnchorLink href="#newsletter" className="action-button -active _margin-bt-50">Assine nossa newsletter</AnchorLink>

      <Social />
    </section>
  )
}