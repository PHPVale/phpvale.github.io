import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import SectionDetails from './../../components/Sections/Details'
import Section404 from './../../components/Sections/404'

import events from './../../assets/json/events.json'

export default () => {
  const { year, month, day } = useParams()
  
  const event = events.filter(event => event.slug === `evento/${year}/${month}/${day}`)

  useEffect(() => window.scrollTo(0, 0))

  return (
    <>
    { event 
      ? <SectionDetails event={ event[0] } />
      : <Section404 />
    } 
    </>   
  )
}