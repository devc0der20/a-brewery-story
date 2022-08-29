import React, { useEffect, useState } from 'react';

export default function Brewery(params) {

  // states, defaults, etc..
  const [results, setResults] = useState("");
  const name = "new york"
  const url = `https://api.openbrewerydb.org/breweries?by_name${name}`
  // convert array of slections to map later
  const selections = "micro nano regional brewpub planning contract proprietor closed".split(" ")
  // fetcher as use effect
  const fetcher = (event) => {
    event.preventDefault()
  }
  useEffect(() => {
    fetch(url)
      .then( data => data.json())
      .then(data => setResults(data))

  }, []);
  
  return(
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6 mt-3">
          "Brewery"
          <form action="" onSubmit={fetcher}>
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
      </div>
    </div>
  )
};
