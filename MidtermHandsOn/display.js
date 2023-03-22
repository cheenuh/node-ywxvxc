//Silva, Cheena Maxine G.
//WD201
//Hands On Exam

const express = require('express');
const app = express();

const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370,
  },
];

app.get('/api/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/api/dishes/:type', (req, res) => {
  const dishes = dishes.find(d) => d.type === parseInt(req.params.type));
  if (!dishes) return res.status (484).send('Record not found');
  res.send(dishes);
});