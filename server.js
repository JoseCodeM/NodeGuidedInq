const express = require('express')
const app = express()
const fs = require('fs') 
const data = JSON.parse(fs.readFileSync('./employees.json'));


app.get('/', function (req, res) {
  res.send(data)
})

app.listen(7000)