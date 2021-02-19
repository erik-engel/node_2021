const express = require("express");
const app = express();


// Test Data

const animals = [
    {id : 1, name : "deer", vegetarian : true, diet : "plants", danger : "only towards plants"}, 
    {id : 2, name : "lion", vegetarian : false, diet : "meat", danger : "very dangerous"}, 
    {id : 3, name : "shark", vegetarian : false, diet : "fish", danger : "only if you're a fish or maybe if you're under water"}];


// ROUTES

// Welcome page
app.get("/", (req, res) => {
    res.send("<h1>Welcome to this animal page</h1>");
});

// Get all animals
app.get("/animals", (req, res) => {
    res.send(animals)
});

// Get animal by id
app.get("/animals/:id", (req, res) => {
    res.send(animals[req.params.id -1]);
});

// LISTEN
app.listen(8080);