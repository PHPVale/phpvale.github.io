import React from 'react'

import { Link } from 'react-router-dom'

import './styles.scss'

export default ({ slug }) => {
  return (
    <Link to={ slug } className="action-button">Detalhes</Link>
  )
}