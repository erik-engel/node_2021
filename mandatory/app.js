const express = require('express');
const beers = require('./Beers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set static folders
app.use(express.static('public'));

// Routes

let id = beers.length;
// GetAll
app.get('/api', (req, res) => res.json(beers));

// GetOne

// POST

app.post('/api', (req, res) => {
  const newBeer = {
    id: ++id,
    name: req.body.name,
    brand: req.body.brand,
    country: req.body.country,
  };
  beers.push(newBeer);
  res.send(req.body);
  console.log(beers);
});

// PUT/PATCH

// DELETE

// Listen
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port', Number(PORT));
});
