import React from 'react'

import EventCard from '../../EventCard'

export default ({ events }) => {

  return (
    <section className="sections -events">
      <h2 className="-uppercase">Eventos</h2>

      <ul className="list-cards">
        {
          events.map((event) => {
            return (
              <EventCard key={ event.id } event={ event } />
            )
          })
        }
      </ul>
    </section>
  )
}