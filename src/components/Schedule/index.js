import React from 'react'

import { FaGithub, FaSlideshare, FaUser } from 'react-icons/fa'

import './styles.scss'

export default ({ schedule }) => {

  return (
    <ul className="list-schedule">
      {
        schedule.map((item) => {
          return (
            <li className="item" key={ item.title }>
              <p>{ item.hour } - { item.title }</p>
              { item.author &&
                <p>
                  <a href={ item.author_url } target="_blank" rel="noopener noreferrer">
                    <FaUser style={{ marginRight: 10 }} /> { item.author }
                  </a>
                </p>
              }
              { item.slides &&
                <p>
                  <a href={ item.slides } target="_blank" rel="noopener noreferrer">
                    <FaSlideshare style={{ marginRight: 10 }} /> Slides
                  </a>
                </p>
              }
              { item.code &&
                <p>
                  <a href={ item.code } target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ marginRight: 10 }} /> Códigos
                  </a>
                </p>
              }
            </li>
          )
        })
      }
    </ul>
  )

}