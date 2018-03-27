var express = require('express');
var app = express();

var query = require('./database/query');

app.get('/', function (req, res) {
  query('SELECT * FROM user_table')
  .then((results) => {
    res.send(results)
  })
  .catch((error) => {
    res.send(error);
  })
});

app.listen(3000);
