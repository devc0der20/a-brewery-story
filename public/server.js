// express server configs
// path localhost:8080
// run node public/server.js

const express = require('express');
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
  res.set('Content-Type', 'json/plain')
  res.header(header)
  res.sendFile(__dirname + "/" + "data.json");
})

app.get('/favorites', (req, res) => {
  res.sendFile(__dirname + "/" + "favorites.json");
   response = {
    user: req.query.first_name,
    favorites: req.query. favorites
   }
   res.end(JSON.stringify(response));
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log('listening on 8080');
})