import React, {PureComponent} from "react"
import Person from "./Person/Person"

class PersonsList extends PureComponent {

// shouldComponentUpdate(nextProps, nextState){
//     console.log("[PersonsList.js] shouldComponentUpdate")
//     if (
//       nextProps.persons !== this.props.persons || 
//       nextProps.changed !== this.props.changed || 
//       nextProps.clicked !== this.props.clicked
//       ) {
//       return true;
//     } else {
//       return false;
//     }
//     // compares only persons pointer, so it is needed to make new array ant work with it in app.js
// }

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[PersonsList.js] getSnapshotBeforeUpdate") 
    return {message:"Snapshot!"}  
}

componentDidUpdate (prevProps,prevState,Snapshot){
    console.log("[PersonsList.js] componentDidUpdate")
    console.log(Snapshot)
} // most comon!

componentWillUnmount(){
  console.log("[PersonsList.js] componentWillUnmount")
}

  render () {
    console.log ("[PersonsList.js] rendering");
    return this.props.persons.map((person, index) => {
      return <Person 
        key={person.id}
        click={()=>this.props.clicked(index)}
        name={person.name} 
        age={person.age} //3 because of map method. this is loop thru all elements
        changed={(event)=>this.props.changed(event, person.id)}
        />
    });
  }
};

export default PersonsList;
