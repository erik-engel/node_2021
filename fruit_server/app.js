const express = require('express');
const app = express();

app.use(express.json());

let plants = [{ id: 1, name: 'Dionaea muscipula' }];

let id = plants.length;

// Routes

// GET
app.get('/plants', (req, res) => {
  res.send({ plants: plants });
});

// GET ONE
app.get('/plants/:id', (req, res) => {
  const plantId = Number(req.params.id);
  const foundPlant = plants.find((p) => p.id === plantId);
  res.send({ plant: foundPlant });
});

// POST
app.post('/plants', (req, res) => {
  const newPlant = req.body;
  newPlant.id = ++id;
  plants.push(newPlant);
  res.send({ data: newPlant });
});

// DELETE
app.delete('/plants/:id', (req, res) => {
	const found = plants.some((plant) => plant.id === parseInt(req.params.id));
	
	if(found) {
	res.json({
		msg: 'Plant added',
		plants : plants.filter(plant => plant.id !== parseInt(req.params.id))
	})
	plants = plants.filter(plant => plant.id !== parseInt(req.params.id))
	// const id = Number(req.params.id);
	
	} else {
		res.status(400)
	}
})


// Listen

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on', Number(PORT));
});
