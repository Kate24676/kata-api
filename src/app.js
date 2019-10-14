const numbers = require('./lib/numbers');

const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');

const app = express();

app.use(express.json());

app.use('./string', stringsRouter);
app.use('/number', numbersRouter);


app.listen(3000);

module.exports = app;
