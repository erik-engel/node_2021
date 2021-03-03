const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 

// Dummy data 

let fruits = [{id : 1, name: 'Apple' }, {id : 2, name: 'Pear' }, {id : 3, name: 'Banana' }];

// Routes

// GET
app.get("/", (req, res) => {
	res.send({"message" : "Hello and welcome to my fruit API"})
});

// All
app.get("/fruits", (req, res) => {
	res.send(fruits)
});

// One
app.get("/fruits/:id", (req, res) => {
	res.send(fruits[req.params.id-1]);
});


//POST
app.post("/fruits", (req, res) => {
	let fruit = req.body
	console.log(fruit)
	fruits.push(fruit)
	res.send("Fruit has been added!")
});

//PATCH
app.patch("/fruits/:id", (req, res) => {
	fruits[req.params.id-1].name = req.body.name
	res.send("Fruitname has been updated to " + fruits[req.params.id-1].name)
	console.log(req.body.name)
});

//DELETE
app.delete("/fruits/:id", (req, res) => {
	let name = fruits[req.params.id-1].name 
	let id = fruits[req.params.id-1].id
	res.send(name + " with id " + id + " has been deleted!")
	fruits.splice(req.params.id-1);

});


// Listen

app.listen(8080)
