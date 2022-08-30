import React, {useState} from 'react';

const database = null
const ServerInterface = () => {
  // internal sets
    const url = "http://localhost:8080/db"
    fetch(url)
      .then(response => response.json())
      .then(data => database = data )
      .catch( error => console.error(error))
}
export default database