const Goal = require('./goalModel.js')
const goalsData = require('./goals-data.json')

Goal.remove({})
  .then(() => {
    Goal.collection.insert(goalsData)
      .then((goals) => {
        console.log(goals)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
