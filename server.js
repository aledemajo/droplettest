const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('hi, how are you?')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})