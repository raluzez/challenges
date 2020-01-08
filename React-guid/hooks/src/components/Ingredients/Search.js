import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props
  const [enteredFilter, setEnteredFilter] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      if(enteredFilter === inputRef.current.value) {
        const query = 
        enteredFilter.length === 0 
          ? '' 
          : `?orderBy="title"&equalTo="${enteredFilter}"`;
  
        fetch('https://hooks-5b60c.firebaseio.com/ingredients.json'+query)
          .then( res => res.json())
          .then( resBody => {
            const loadedIngredients = [];
            for (const key in resBody) {
              loadedIngredients.push({
                id: key,
                title: resBody[key].title,
                amount: resBody[key].amount
              })
            }
            onLoadIngredients(loadedIngredients);
          })
      }
    } ,500);
    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter, onLoadIngredients, inputRef])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input 
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={e => setEnteredFilter(e.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
