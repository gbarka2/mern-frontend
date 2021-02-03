import React from 'react'
import {Link} from 'react-router-dom'

const Display = (props) => {
  const {cars} = props
  // console.log(cars)
  const loaded = () => {
      return (
        <div style={{textAlign: "center"}}>DISPLAY
        {cars.map(car => {
          return(
            <article key={car._id}>
              <h1>{car.year} {car.make} {car.model}</h1>
              <div>
                <Link to='/edit'>
                  <button onClick={() => {
                    props.selectCar(car)
                    props.history.push("/edit")
                  }}>Edit Listing</button>
                </Link>
                <button onClick={() => {
                  props.deleteCar(car)
                }}>Sold!</button>
              </div>
            </article>
          )
        })}
      </div>
    )
  }

  const loading = () => {
    return <h1>Vroom Vroom...</h1>
  }

  return cars.length > 0 ? loaded() : loading()

}
export default Display