import React from 'react';
import Button from './Button';

const TodoItem = (props) => {
  return (
    <li>
      <span>{props.value}</span>
      <Button value="Delete" />
      <Button value="Done" />
    </li>
  )
}

export default TodoItem;