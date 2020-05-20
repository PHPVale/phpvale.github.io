import React from 'react'

export default ({ location }) => {

  const googleMapsURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA7S8pFYD8OWZjq4aFd8CN2Y1fHBTecreg&q=${ location }`

  return (
    <iframe
      height="450"
      width="100%"
      title="iframe-map"
      src={ googleMapsURL }>
    </iframe>
  )

}