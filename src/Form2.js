import React from 'react'
import {Link} from 'react-router-dom'

const Form2 = (props) => {
  console.log(props)
  const [formData, setFormData] = React.useState(props.owner)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    props.handleSubmit(formData)
    props.history.push('/owners')
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <Link to='/owners'><button>Back To Owners</button></Link>
      <input 
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input 
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input 
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  )
}

export default Form2
