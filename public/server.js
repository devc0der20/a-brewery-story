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
  const query = {
    user: req.query.user,
    password: req.query.password
  }
  let rawdata = fs.readFileSync('./public/data.json');
  // parse und grab users
  let users = JSON.parse(rawdata).users;
  console.log(users);
  // validate name/password
  const validate = users.some(user => user.name === query.user && user.password === query.password)

  if (validate){
    console.log("login successful");
    res.send({ "result": true })
  } else {
    console.log("failed login attempt");
    res.send({ "result": true })
  }

})


app.use(express.static('public'));

app.listen(port, () => {
  console.log('listening on 8080');
})