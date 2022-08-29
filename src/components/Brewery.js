import React, { useEffect, useState } from 'react';
import List from './List';

export default function Brewery(params) {

  // states, defaults, etc..
  const [inputField, setInputField] = useState("");
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState(null);

  // convert array of slections to map later
  const selections = "micro nano regional brewpub planning contract proprietor closed".split(" ")

  const update = (event) => { 
    event.preventDefault()
    const [type, city] = event.target // destructuring target
    setInputField(city.value.toLowerCase());
    setSelected(type.value)
    // console.log(city.value);
    // console.log(type.value);
  }

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${inputField}&by_type=${selected}`)
      .then( response => response.json())
      .then( data => setResults(data))
  }, [inputField]); // trigger by inputFiled change
  
  return(
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6 mt-3">
          "Brewery"
          <form action="" onSubmit={update}>
            <div className='d-flex'>
              <select className='form-select form-select-sm mx-3' name="type" id="type">
                { selections.map((selection) => {
                  return <option key={selection} value={selection} text={selection}>{selection.toUpperCase()}</option>
                })}
              </select>
              <input className='form-control '/>
            </div>
            <button className='btn btn-outline-primary w-25 mt-4' type='submit'>Fetch!</button>
          </form>
        </div>
        <div>
          <List results={results}/>
        </div>
      </div>
    </div>
  )
};
