const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const version = process.env.VERSION || 'v0';

app.get('/echo/:name', (req, res) => {
  const name = req.params.name || 'World';
  res.status(200).send(`Hello, ${name}!`);
});

app.get('/version', (req, res) => {
  res.status(200).send({version});
});

app.listen(port, () => {
  console.log(`Express App listening on port ${port}`);
});
