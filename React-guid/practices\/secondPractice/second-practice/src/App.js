import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput:""
  }

  userInputHandler = (event) => {
    this.setState ({
      userInput:event.target.value
    })
  }

  deleteCharacter = (id) =>{
    const text = this.state.userInput.split("");
    text.splice(id,1);
    const newText = text.join("");
    this.setState({userInput:newText})
  }

  render() {
    const characters = this.state.userInput.split("").map((char,index)=>{
        return <Char 
          character={char} 
          key={index}
          click={()=>this.deleteCharacter(index)}/> 
      })
    

    return (
      <div className="App">
        <input 
        type="text"
        value={this.state.userInput}
        onChange={this.userInputHandler}/>
        <p>{this.state.userInput}</p>
        <Validation inputLenght={this.state.userInput.length}/>
        {characters}
      </div>
    );
  }
}

export default App;
