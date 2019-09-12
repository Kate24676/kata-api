const express = require('express');

const app = express();

app.get('/strings/hello/:parameter', (req, res) => {
  res.json({ result: `Hello ${req.params.parameter}!` });
});

app.get('/strings/upper/:parameter', (req, res) => {
  const parameter = req.params.parameter.toUpperCase();
  res.json({ result: `${parameter}` });
});

app.get('/strings/lower/:parameter', (req, res) => {
  const parameter = req.params.parameter.toLowerCase();
  res.json({ result: `${parameter}` });
});

app.get('/strings/first-characters/:parameter', (req, res) => {
  const parameter = req.params.parameter.charAt(0);
  res.json({ result: `${parameter}` });
});

app.get('/strings/first-characters/:parameter', (req) => {
  console.log(req.query.substring);
});

app.listen(3000);

module.exports = app;
