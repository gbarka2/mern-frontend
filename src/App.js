import React from 'react'
import './App.css'
import {Route, Link, Switch} from "react-router-dom"
import Display from './Display'
import Form from './Form'
import Owner from './Owner'
import Form2 from './Form2'

function App() {
  const url = "https://merngb.herokuapp.com"
  const [cars, setCars] = React.useState([])
  const emptyCar = {
    make: "",
    model: "",
    year: 0
  }
  const emptyOwner = {
    firstName: "",
    lastName: "",
    age: 0,
    cars: []
  }
  const [selectedCar, setSelectedCar] = React.useState(emptyCar)
  const [owners, setOwners] = React.useState([])
  const [selectedOwner, setSelectedOwner] = React.useState(emptyOwner)

  const getCars = () => {
    fetch(url + "/cars")
    .then(response => response.json())
    .then(data => {
      setCars(data)
    })
  }

  const getOwners = () => {
    fetch(url + "/owners")
    .then(response => response.json())
    .then(data => {
      setOwners(data)
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

  const handleCreateOwner = (newOwner) => {
    console.log('test')
    fetch(url + "/owners", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    })
    .then(() => {
      getOwners()
    })
  }

  const selectCar = (car) => {
    setSelectedCar(car)
  }

  const selectOwner = (owner) => {
    setSelectedOwner(owner)
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

  const handleUpdateOwner = (owner) => {
    fetch(url + '/owners/' + owner._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(owner)
    })
    .then(() => {
      getOwners()
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

  const deleteOwner = (owner) => {
    fetch(url + '/owners/' + owner._id, {
      method: "delete"
    })
    .then(() => {
      getOwners()
    })
  }

  return (
    <div>
      <h1>Car Listings</h1>
      <Link to="/create">
        <button>Create New Listing</button>
      </Link>
      <Link to="/owners">
        <button>Show Owners</button>
      </Link>
      <Link to="/owners-create">
        <button>Create New Owner</button>
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
          <Route 
            exact
            path='/owners'
            render={(rp) => (
              <Owner {...rp} label="owners" url={url} getOwners={getOwners} owners={owners} selectOwner={selectOwner} deleteOwner={deleteOwner} />
            )}
          />
          <Route 
            exact
            path='/owner-edit'
            render={(rp) => (
              <Form2 {...rp} label="Update Owner" owner={selectedOwner} handleSubmit={handleUpdateOwner} />
            )}
          />
          <Route 
            exact
            path='/owners-create'
            render={(rp) => (
              <Form2 {...rp} label="Create Owner" owner={emptyOwner} handleSubmit={handleCreateOwner} />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App;
