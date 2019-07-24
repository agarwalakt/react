import React from 'react';

const person = (props) => {
  return (
    <div>
<p onClick={props.click}>{Math.random() * 30} I am a Person and my name is {props.name} and I am {props.age} years old</p>
<p>{props.children}</p>

<input type="text" onChange={props.changed}/>
    </div>
  )

}

export default person;
