import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
//function App() {
class App extends Component {
 render(){
  return (
    // this is not an html tag, its a tag provided by react
//className is used since its not html, and class is a reserved keyword
    <div className="App">
      <h1> Hi Bubu, I just wanted to let you know that......</h1>
      <Person />
    </div>
  );
  //the above lines of code would translate into javascript which would look like whats happening below.
// return (React.createElement('div', null, 'Hi, I `m a React App!!'))
 // return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I `m a React App!!')))
}
}

export default App;
