import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './UserOutput/UserOutput.css';
import './UserInput/UserInput.css';

import Job from './Job/Job';
import './Job/Job.css';

class App extends Component {
state = {
  persons: [
    {name: "David", age: 29},
    {name: "Bob", age: 34}
  ],
  hobby: "skiing",
  username1: "Sancydave",
  username2: "SomeoneElse",
  jobs: [
    {position: "Engineer", salary: 2500, fullTime: true},
    {position: "Programmer", salary: 3400, fullTime: false},
    {position: "Medic", salary: 1600, fullTime: true},
  ]
}

nameChangeHandler = () => {
  this.setState({
    persons: [
      {name: "Dave", age: 29},
      {name: "Bob", age: 34}
    ]
  })
}

userOutputNameChangeHandler = (event) => {
  this.setState({
    username1: event.target.value,
    username2: event.target.value
  })
}

render() {

    const style = {
      margin: '15px'
    };

    const jobList = () => {
      return this.state.jobs.map(job => {
        return <Job position={job.position} salary={job.salary} fullTime={job.fullTime}/>
      })
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.nameChangeHandler}>Change Name</button>                
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> And I like {this.state.hobby}</Person>
        </header>
        <section style={style}>
          <UserInput inputChange={this.userOutputNameChangeHandler.bind(this)} inputValue={this.state.username1}></UserInput>
          <UserOutput title={this.state.username1} content="Content of the first output"></UserOutput>
          <UserOutput title={this.state.username2} content="Content of the second output"></UserOutput>
        </section>
        <section>
          {jobList()}
        </section>
      </div>
    );
  }
}

export default App;
