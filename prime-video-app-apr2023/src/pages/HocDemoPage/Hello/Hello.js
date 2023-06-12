import React from 'react'

const Hello = ( props ) => {
  console.log(props);

  return (
    <h3>Hello, {props.name}!</h3>
  );
}

export default Hello