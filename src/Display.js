import React from 'react'

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
                <button>Edit Listing</button>
                <button>Sold!</button>
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