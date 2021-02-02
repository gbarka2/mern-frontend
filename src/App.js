import React from 'react'
import './App.css'
import {Route, Link, Switch} from "react-router-dom"
import Display from './Display'
import Form from './Form'

function App() {
  const url = "https://merngb.herokuapp.com/"


  return (
    <div>
      <h1>Car Listings</h1>
      <Link>
        <button>Create New Listing</button>
      </Link>
      <hr />
      <main>
        <Switch>
          <Route 
            exact
            path='/'
            render={(rp) => <Display {...rp} />} />
          <Route />
          <Route />
        </Switch>
      </main>
    </div>
  )
}

export default App;
