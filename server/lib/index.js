const express = require('express')
const { db } = require('./db')
const app = express()

const port = 8080

app.listen(port, () => {
  console.log('your shit is listening')
})
