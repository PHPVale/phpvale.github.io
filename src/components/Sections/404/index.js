import React from 'react'

import { Link } from 'react-router-dom'

export default () => {
  return (
    <section className="sections">
      <h1 className="_margin-b-20">Essa página não existe!</h1>
      <Link to="/" className="">Ir para o site</Link>
    </section>
  )
}