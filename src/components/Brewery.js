import React, { useEffect, useState } from 'react';
import List from './List';
import ServerInterface from '../data/ServerInterface'
import FormDialog from './FormDialog'


export default function Brewery() {

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

    <>
      <form action=""  onSubmit={update}>
        <div className='d-flex shadow-lg p-3 mb-5 bg-body rounded'>
          <select className='form-select form-select-sm mx-1 w-auto' name="type" id="type">
            { selections.map((selection) => {
              return <option key={selection} value={selection} text={selection}>{selection.toUpperCase()}</option>
            })}
          </select>
          <input className='form-control' value="york"/>
          <button className='btn btn-outline-primary mx-2 w-25' type='submit'><i className="bi bi-search"></i></button>
        </div>
      </form>

        <div className="col mx-auto">
          <List results={results}/>
        </div>
      
    </>

  )
};
