import React, { useContext } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

const App = (props: any): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/fav">Favorite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
