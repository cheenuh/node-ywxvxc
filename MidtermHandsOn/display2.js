app.use(express.json());

app.get('/api/dishes', (req, res) => {
  const dishes = {
    type: req.body.type,
    province: req.body.province,
    price: req.body.price,
  };

  dishes.push(dishes);
  res.send(dishes);
});
