import React from 'react'

import events from './../../assets/json/events.json'

import SectionHome from './../../components/Sections/Home'
import SectionAbout from './../../components/Sections/About'
import SectionEvents from './../../components/Sections/Events'
import SectionNewsletter from './../../components/Sections/Newsletter'
import Footer from './../../components/Footer'

export default () => {

  return (
    <>
      <SectionHome />
      <SectionAbout />
      <SectionEvents events={ events } />
      <SectionNewsletter />
      <Footer />
    </>
  )
}