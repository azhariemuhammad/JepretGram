const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', function(req, res){
res.send('hello world')
})


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/azharie_jepretGram')
  .then(() => console.log('db connection succesfull to azharie_jepretGram'))
.catch((err) => console.log(err))

const api = require('./routes/api')
app.use('/api', api )

app.listen(3000, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('berhasil')
  }
})