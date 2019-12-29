import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {username:"Pupis"}

  usernameChangedHandler = (event) => {
    this.setState({username:event.target.value});
    console.log("changing")
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username}/>
        <UserInput cahnged={this.usernameChangedHandler} username={this.state.username}/>
      </div>
    );
  }
}

export default App;
