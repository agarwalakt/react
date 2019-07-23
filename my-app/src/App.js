import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';
//function App() {
const App = (props) => {
const [personsState, setPersonState] = useState({
  persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 31},
    {name: 'Stephanie', age: 32}
  ]
});


const [otherState, setOtherState] = useState('some other value');
console.log(personsState, otherState);
const switchNameHandler = () => {
  //  DONT do this -> this.state.persons[0].name='Maximillian';
  setPersonState({
    persons: [
      {name: 'Maximilian', age: 280},
      {name: 'Manu', age: 310},
      {name: 'Steph', age: 32}
    ],
    otherState: personsState.otherState
  });
  // console.log(['Was clicked!'])
};
  return (
    // this is not an html tag, its a tag provided by react
//className is used since its not html, and class is a reserved keyword
    <div className="App">
      <h1> Hi, I`m a React App!</h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler}> Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Stock market trading</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> My Hobbies: Stock market trading</Person>
      <Person />
      <Person />
    </div>
  );
  //the above lines of code would translate into javascript which would look like whats happening below.
// return (React.createElement('div', null, 'Hi, I `m a React App!!'))
 // return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I `m a React App!!')))
}


export default App;
