// express server configs
// path localhost:8080
// run node public/server.js

const fs = require('fs');

const express = require('express');
const { response } = require('express');
const port = 8080;
const app = express();
const header = {
  "Access-Control-Allow-Origin": "*"}
const options = {
    setHeaders: function (res, path, stat) {
    res.set("Access-Control-Allow-Origin", "*")
  }
}

app.get('/', (req, res) => {
  res.send('test home!');

})


app.get('/db', (req, res) => {
  // res.set('Content-Type', 'json/plain')
  res.header(header)
  const response = {
    user: req.query.user,
    password: req.query.password
  }
  fs.readFile('./public/data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    if (response.user in Object.values(data)){
      console.log("login successful");
    } else {
      console.log("failed login attempt");
    }

    // console.log(data);
    // res.send(JSON.stringify(data));
  });
  console.log(response);
  res.send(JSON.stringify(response));


  
})



app.use(express.static('public'));

app.listen(port, () => {
  console.log('listening on 8080');
})