import React, {useState} from 'react';

const ServerInterface = () => {
  const online = false
  // internal sets
    const url = "http://localhost:8080/db?user=dummy&passowrd=dummy"
    fetch(url)
      .then(response => response.json())
      .then(data =>  data )
      .catch( error => console.error(error))
  //  online = userData
   console.log(online);
   return online
}

export default ServerInterface