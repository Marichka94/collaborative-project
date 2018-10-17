const mongoose = require('./connection.js')

const GoalSchema = new mongoose.Schema ({
  goal: String,
  dueDate: String,
  tasks: Array
})

const Goal = mongoose.model('Goal', GoalSchema)

module.exports= {
  Goal
}