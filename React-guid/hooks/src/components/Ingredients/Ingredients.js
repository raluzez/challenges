import React, { useState, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ userIngredients, setUserIngredients ] = useState([])

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }, [])

  const addIngredientHandler = ingredient => {
    fetch('https://hooks-5b60c.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'applications/json' }
    }).then( res => {
        return res.json();
    }).then( resBody => {
        setUserIngredients( prevIngredients => [
          ...prevIngredients,
          { id: resBody.name,
            ...ingredient} 
          ]);
    })
  }

  const removeIngredientHandler = ingredientId => {
    setUserIngredients( prevIngredients => prevIngredients.filter( ingredient => ingredient.id !== ingredientId))
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        <IngredientList 
          ingredients={userIngredients} 
          onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
