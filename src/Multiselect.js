import React from 'react'
import MultiSelect from 'react-multi-select-component'

const CarSelect = (props) => {
  console.log(props.cars)
  // const options = props.cars.map(car => {
  //   return (
  //     <p>{car.year} {car.make} {car.model}</p>
  //   )
  // })
  const options = props.cars.map(car => {
    return (
      {label: car.year + car.make + car.model, value: car.make}
    )
  })
  // const options = [
  //   {label: "Ford Fusion", value: "ford"},
  //   {label: "Chevy Tahoe", value: "chevy"}
  // ]
  // console.log('options', options)
  const [selected, setSelected] = React.useState([])


  return (
    <div>Select Cars
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect 
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={'Select'}
      />
    </div>
  )
}

export default CarSelect