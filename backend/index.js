const express = require('express')
const connectToMongo = require('./db')

connectToMongo();

 

const app = express()
const port = 3000
app.use(express.json())

//Available routes

app.use('/api/auth', require('./routes/auth'))


// app.use('/api/time', require('./routes/time'))


// app.use('/api/appointment', require('./routes/appointment'))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})