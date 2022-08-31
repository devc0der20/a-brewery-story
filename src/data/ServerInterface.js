import React, {useState} from 'react';

const ServerInterface = () => {
  const [ userData, setUserData ] = useState(null)
  // internal sets
    const url = "http://localhost:8080/db"
    fetch(url)
      .then(response => response.json())
      .then(data => setUserData(data) )
      .catch( error => console.error(error))
  return userData
}


export default ServerInterface