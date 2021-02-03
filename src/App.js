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
  const [selectedCar, setSelectedCar] = React.useState(emptyCar)

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

  const handleCreateCar = (newCar) => {
    fetch(url + "/cars", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCar)
    })
    .then(() => {
      getCars()
    })
  }

  const selectCar = (car) => {
    setSelectedCar(car)
  }

  const handleUpdateCar = (car) => {
    fetch(url +'/cars/' + car._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    })
    .then(() => {
      getCars()
    })
  }

  const deleteCar = (car) => {
    fetch(url + '/cars/' +  car._id, {
      method: "delete"
    })
    .then(() => {
      getCars()
    })
  }

  return (
    <div>
      <h1>Car Listings</h1>
      <Link to="/create">
        <button>Create New Listing</button>
      </Link>
      <hr />
      <main>
        <Switch>
          <Route 
            exact
            path='/'
            render={(rp) => <Display {...rp} cars={cars} selectCar={selectCar} deleteCar={deleteCar} />} 
          />
          <Route 
            exact
            path='/create'
            render={(rp) => (
              <Form {...rp} label="create" car={emptyCar} handleSubmit={handleCreateCar} />
            )}
          />
          <Route
            exact
            path='/edit'
            render={(rp) => <Form {...rp} label="update" car={selectedCar} handleSubmit={handleUpdateCar} />}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App;
