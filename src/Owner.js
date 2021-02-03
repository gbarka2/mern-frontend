import React from 'react'

const Owner = (props) => {
  const [owners, setOwners] = React.useState([])

  const getOwners = () => {
    fetch(props.url + "/owners")
    .then(response => response.json())
    .then(data => {
      setOwners(data)
    })
  }

  React.useEffect(() => {
    getOwners()
  }, []) 
  
  return (
    <div style={{textAlign: "center"}}>OWNER
      {owners.map(owner => {
        return (
          <article key={owner._id}>
            <h1>{owner.firstName} {owner.lastName} - Age: {owner.age}</h1>
            <p>{owner.cars[0]}</p>
          </article>
        )
      })}
    </div>
  )
} 

export default Owner
