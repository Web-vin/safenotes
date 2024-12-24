const express = require('express')
const main = require('./db')
const app = express()
const port = 2000;
var cors = require('cors')

main();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())
app.use(express.json())
//Available routes 

app.use("/api/auth", require('./routes/auth.js'))
app.use("/api/notes", require('./routes/notes.js'))

app.get('/api/vin/login', (req, res) => {
    res.send('Hello vinayak!')
  })

app.listen(port, () => {
  console.log(`Inotes listening on port ${port}`)
})