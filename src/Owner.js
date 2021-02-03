import React from 'react'

const Owner = (props) => {
  const {owners} = props
  
  React.useEffect(() => {
    props.getOwners()
  }, []) 
  
  return (
    <div style={{textAlign: "center"}}>OWNER
      {owners.map(owner => {
        return (
          <article key={owner._id}>
            <h1>{owner.firstName} {owner.lastName} - Age: {owner.age}</h1>
            {owner.cars.map(car => {
              return (
                <p>{car.year} {car.make} {car.model}</p>
              )
            })}
          </article>
        )
      })}
    </div>
  )
} 

export default Owner
