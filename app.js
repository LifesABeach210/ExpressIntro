const express = require('express');
const app = express();
const port = 4000;

app.get('/apples', (req, res) => {
  res.status(200).send('Dan Rothwell!');
});

app.get('/', (req, res) => {
  res.status(418).send('Teapots only');
});

app.get('*', (req, res) => {
  res.status(404).send('Nothing here!');
});



// app.get('*', (req, res) => {
//   res.send('Dan Rothwell');
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
//"browser":"open -a Safari http://localhost:3000"
