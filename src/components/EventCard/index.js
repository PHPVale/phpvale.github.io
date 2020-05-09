import React from 'react'

import ActionButton from './../ActionButton'

import './styles.scss'

export default ({ event: { name, date, description, slug } }) => {
  
  return (
    <li className="event-card">
      <h3>{ name }</h3>
      <time className="date" dateTime={ date }>{ date }</time>

      <p className="description">
        { description }
      </p>

      <ActionButton slug={ slug } />
    </li>
  )
}