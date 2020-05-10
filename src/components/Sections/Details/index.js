import React from 'react'

import Header from './../../Header'
import Schedule from './../../Schedule'
import Map from './../../Map'
import Photos from './../../Photos'
import Footer from './../../Footer'

export default ({ event: { name, date, description, location, schedule, images_path } }) => {

  return (
    <>
      <Header />

      <section className="sections -intern">

        <div className="container">
          <time className="date" dateTime={ date }>{ date }</time>  
          <h1>{ name }</h1>

          <h2 className="_margin-t-50">Detalhes</h2>
          <p className="_margin-t-20">{ description }</p>

          <h3 className="_margin-t-50 _margin-b-20">Programação</h3>
          <Schedule schedule={ schedule } />

          <h3 className="_margin-t-50 _margin-b-20">Localização</h3>
          <p className="_margin-b-20">{ location.name } - { location.complement }</p>
          <Map location={ location.name } />

          { images_path &&
            <>
              <h3 className="_margin-t-50 _margin-b-20">Fotos</h3>
              <Photos images_path={ images_path } />
            </>
          }
        </div>

      </section>

      <Footer />
    </>
  )

}