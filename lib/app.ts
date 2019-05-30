// lib/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World! Welcome To My Page!');
});

app.listen(3000, function () {
  console.log('node-express-typescript app listening on port 3000!');
});