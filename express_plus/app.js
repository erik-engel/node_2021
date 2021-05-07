const express = require('express');
const app = express();

// To give express some security
const helmet = require('helmet');
app.use(helmet());



app.listen(8080, (error) => {
    console.log('Server is running on port ', 8080);
  });
