import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
//function App() {
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 31},
      {name: 'Stephanie', age: 32}
    ]
  }
 render(){
  return (
    // this is not an html tag, its a tag provided by react
//className is used since its not html, and class is a reserved keyword
    <div className="App">
      <h1> Hi, I`m a React App!</h1>
      <p>This is working!</p>
      <button> Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Stock market trading</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My Hobbies: Stock market trading</Person>
      <Person />
      <Person />
    </div>
  );
  //the above lines of code would translate into javascript which would look like whats happening below.
// return (React.createElement('div', null, 'Hi, I `m a React App!!'))
 // return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I `m a React App!!')))
}
}

export default App;
