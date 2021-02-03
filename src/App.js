import React from 'react'
import './App.css'
import {Route, Link, Switch} from "react-router-dom"
import Display from './Display'
import Form from './Form'

function App() {
  const url = "https://merngb.herokuapp.com"
  const [cars, setCars] = React.useState([])
  const emptyCar = {
    make: "",
    model: "",
    year: 0
  }

  const getCars = () => {
    fetch(url + "/cars")
    .then(response => response.json())
    .then(data => {
      setCars(data)
    })
  }

  React.useEffect(() => {
    getCars()
  }, [])

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
            render={(rp) => <Display {...rp} cars={cars}/>} 
          />
          <Route 
            exact
            path='/create'
            render={(rp) => (
              <Form {...rp} label="create" />
            )}
          />
          <Route
            exact
            path='/edit'
            render={(rp) => <Form {...rp} label="update" />}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App;
