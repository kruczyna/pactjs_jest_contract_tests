const express = require('express')
const kittens = require('./Kittens')

const app = express();

app.get('/api/kittens', function(req, res){
  res.json(kittens);
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server strated on port ${PORT}`))
