import React,{ useEffect, useRef, useContext } from "react";
import Styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(()=>{
    console.log("[Cockpit.js] useEffect");
    // setTimeout(()=> {
    //   alert("Saved data to cloud");
    // },1000)
    toggleBtnRef.current.click()
    return ()=> {
      console.log("[Cockpit.js] clenup")
    }
  },[]) // arg witch call this

  useEffect(()=>{
    console.log("[Cockpit.js] 2nd useEffect");
    return ()=> {
      console.log("[Cockpit.js] clenup")
    }
  })

  const classes = [];
  let btnClass = "";

  if (props.showPersons){
      btnClass = Styles.Red
  }
    
  if (props.personsLength <= 2) {
    classes.push(Styles.red);
  }
  if (props.personsLength <= 1) {
    classes.push(Styles.bold);
  }
  return (
      <div className={Styles.Cockpit}>
          <h1>Ract app</h1>
          <p className={classes.join(" ")}>{props.title}</p>
          <button 
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}>
            Toggle Persons
          </button>         
          <button onClick={authContext.login}>Log In</button>         
      </div>
  )
}

export default React.memo(Cockpit);