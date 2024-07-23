const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() ) // use JSON middleware to parse every request that comes in

app.listen(
  PORT,
  () => console.log(`it's alive on localhost:${8080}`)
)

app.get('/tshirts', (req, res) => {
  res.status(200).send({
    tshirt: '👕',
    size: 'L'
  })
});

app.post('/tshirts/:id', (req, res) => {

  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'We need a logo!'})
  }

  res.send({
    tshirt: `👕 with your ${logo} and an ID of ${id}`,
  })
  
})