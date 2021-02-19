// Import package
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
// Execute package
const app = express();


// Middlewares
// Functions that'll alwayes execute, when we hit a specific route
// We can f.eks use some kind of authetication like 
// app.use(auth);



// Routes 
app.get('/', (req,res) => {
    res.send('We are on home');
});

app.get('/posts', (req,res) => {
    res.send('We are on posts');
});

app.get('/welcome', (req, res) => {
    res.send('<h1>Welcome<h1>')
})

app.get('/me', (req, res) => {
    res.send({name : 'Erik', age : 25, course : 'node.js'})
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useUnifiedTopology: true }, 
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);


// How do we start listening to the server?
app.listen(8080);
