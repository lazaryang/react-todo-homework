import React from 'react';
import Button from './Button';

const TodoItem = (props) => {
  
  return (
    <li class='myList' >
      <span>{props.value}</span>
      <Button value="Delete" onClick={()=> props.myFunction(props.id) }/>
      <Button value="Done"  />
    </li>
  )
}

// function a (){
//   removeEventListener
// }

// function myFunction() {
//   var item = document.getElementsByClassName("myList");
//   item = remove(item);
// }
export default TodoItem;