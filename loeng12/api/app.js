const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const port = 3000

app.get('/', (req, res) => {
  res.send('Tere, Maailm!')
})

app.post('/liida', (req, res) => {
    console.log('liidame!!', req.body);
    let summa = req.body.reduce((sum, number) => sum + parseInt(number), 0);
    res.send(JSON.stringify({ vastus: summa }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})