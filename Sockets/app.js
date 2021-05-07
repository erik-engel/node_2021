const express = require('express');
const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('A socket connected', socket.id);
    socket.on('colorSelected', (data) => {
        // console.log(data);
        // socket.emit("changeColor", data) //Changes for only selected socket

        // io.emit("changeColor", data) // Changes for all sockets

        socket.broadcast.emit("changeColor",data) //Changes for all but itself
    });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/colors.html');
});

server.listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server running on port'), 8080;
});
