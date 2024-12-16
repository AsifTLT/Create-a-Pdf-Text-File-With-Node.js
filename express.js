const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req)
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})