// Silva, Cheena Maxine G.
//WD201
//idterm Hands On

var express = require('express');
var app = express();

app.get('/api/dishes', (req, res) => {
  res.send(['Sisig', 'Salpicao', 'Bagnet']);
});
app.get('/api/dishes:type', (req, res) => {
  res.send(req.params.type);
});

app.get('/api/dishes:province', (req, res) => {
  res.send(req.params.province);
});
app.get('/api/dishes:price', (req, res) => {
  res.send(req.params.price);
});

app.listen(3000, () => console.log('Listening to port 3000'));
