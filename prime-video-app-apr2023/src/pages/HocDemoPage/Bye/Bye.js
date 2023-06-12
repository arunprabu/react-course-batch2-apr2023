import React from 'react'

const Bye = (props) => {
  console.log(props);

  return (
    <h3>Bye, {props.name}</h3>
  )
}

export default Bye