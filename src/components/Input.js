import React from 'react';

const Input = (props) => {
  return (
    <input type="text" onChange={props.handleChange} />
  )
}

export default Input;