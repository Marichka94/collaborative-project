const express = require('express')
const parser = require('body-parser')
const app = express()
const Goal = require('./db/goalModel.js')
const cors = require('cors')

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

app.get('/atruity/main/goals', (req, res) => {
  Goal.find()
  .then((goals) => {
    res.json(goals)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
