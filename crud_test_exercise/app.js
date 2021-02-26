const express = require('express');
const app = express();


// Routes

// Index
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

// Post
app.post('/quotes', (req, res) => {
	console.log('Helooooooooo')
});


// Listen
app.listen(8080, function() {
	console.log('listening on port 8080');
	console.log(__dirname)
})
