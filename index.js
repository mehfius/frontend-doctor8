const express = require('express');

const app = express();

app.use(express.static("./export"));

app.get('/compact', (req, res) => {
  var csscompact = require('./csscompact');
 var csscompact = require('./jscompact');
  res.send('Hello Express app!')
});



app.listen(3000, function () {
  console.log("rodando");
});
