import React, { Component } from 'react';
import Styles from './App.module.css';
import PersonsList from "../Components/PersonsList/PersonsList";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";




class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      {id:"1", name: "Lukas", age:"25"},
      {id:"2", name: "Pupis", age:"24"},
      {id:"3", name: "Krabas", age:"35"}
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated:false
  }

  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFromProps",props)
    return state;
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("[App.js] shouldComponentUpdate")
    return true // must return something
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate")
  }
  swichNameHandler = (newName) => {
    // DON'T DO THIS this.state.persons[0].name = "Stabas";
    this.setState({
      persons: [
      { name: newName, age:25},
      { name: "Pupis", age:24},
      { name: "Krabas", age:35}
    ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // other way to change state from input
    this.setState((prevState,props)=> {
      return {
      persons:persons, 
      changeCounter:prevState.changeCounter + 1
  } } ) } // super complex needs more digging (59 flexible lists)

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons
    persons.splice(personIndex, 1); // removes at all. cant get back that element.
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({showPersons:!doseShow});
  }

  loginHandler = () => {
    this.setState({authenticated:true})
  }

  render () {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons){
      persons = 
          <PersonsList
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
    };
    return (
      <Aux>
        <button onClick={()=>{
          this.setState({showCockpit:false})}}>
            Remove Cockpit
        </button>
        <AuthContext.Provider value={{
          authenticated:this.state.authenticated, 
          login :this.loginHandler}}>
        {this.state.showCockpit? (
          <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
        {/* prefered way to show parts of data (elements) */}
        </AuthContext.Provider>
      </Aux>  
    )
  };
}

export default withClass(App, Styles.App);
