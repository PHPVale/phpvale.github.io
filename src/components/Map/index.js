import React from 'react'

export default ({ location }) => {

  const googleMapsURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyASp0Fiyc7Q0j5Yn60c58KHPQh-5ApeNow&q=${ location }`

  return (
    <iframe
      height="450"
      width="100%"
      src={ googleMapsURL }>
    </iframe>
  )

}