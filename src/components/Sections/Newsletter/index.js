import React from 'react'

import './styles.scss'

export default () => {
  return (
    <section className="sections -newsletter" id="newsletter">
      <h2 className="-uppercase _center">Assine nossa newsletter</h2>

      <p className="_margin-bt-50 _center">Inscreva-se para receber notificações dos próximos meetups.</p>

      <div className="newsletter-form">
        <iframe
          height="270px"
          src="https://app.mailjet.com/widget/iframe/5l4O/qWh"
          title="iframe-newsletter"
          width="100%">
        </iframe>
      </div>
    </section>
  )
}