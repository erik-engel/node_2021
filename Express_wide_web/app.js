const express = require('express');
//const path = require('path');
const app = express();

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/welcome/welcome.html');
});

app.get('/dragons', (req, res) => {
  res.sendFile(__dirname + '/public/dragons/dragons.html');
});

app.get('/potato', (req, res) => {
  // if the querystring contains the value spud ??? the return petite potato
  // otherwise return adult potato or "My life is potato. I have potato blood in my veins."
  if (req.query.q === 'spud') {
    return res.send({ msg: 'petite potato' });
  }
  return res.send({
    msg: 'My life is potato. I have potato blood in my veins.',
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port', Number(PORT));
});
