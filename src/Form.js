import React from 'react'
import {Link} from 'react-router-dom'

const Form = (props) => {
  const [formData, setFormData] = React.useState(props.car)

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit(formData)
    props.history.push('/')
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <Link to='/'><button>Back To Listings</button></Link>
      <input 
        type="text"
        name="make"
        value={formData.make}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        value={formData.model}
        onChange={handleChange}
      /> 
      <input 
        type="number"
        name="year"
        value={formData.year}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  )
}

export default Form
