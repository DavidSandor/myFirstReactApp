import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {name: "David", age: 29},
    {name: "Bob", age: 34}
  ],
  hobby: "skiing"
}

nameChangeHandler = () => {
  this.setState({
    persons: [
      {name: "Dave", age: 29},
      {name: "Bob", age: 34}
    ]
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.nameChangeHandler}>Change Name</button>                
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> And I like {this.state.hobby}</Person>
        </header>
      </div>
    );
  }
}

export default App;
