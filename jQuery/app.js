const express = require('express');

const app = express();


app.use(express.json());
// Routes
app.use(express.static('./'));

// Listen
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port', Number(PORT));
});
