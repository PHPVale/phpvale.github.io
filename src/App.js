import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import Page404 from './pages/404'

import './styles/base/_base.scss'
import './styles/base/_normalize.scss'
import './styles/helpers/_helpers.scss'
import './styles/helpers/_modifiers.scss'

import './styles/components/_container.scss'
import './styles/components/_sections.scss'
import './styles/components/_list-cards.scss'

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/evento/:year/:month/:day">
          <Details />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route>
          <Page404 />
        </Route>
        
      </Switch>
    </Router>
  )
}

export default App