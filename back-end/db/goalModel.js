const mongoose = require('./connection.js')

const GoalSchema = new mongoose.Schema ({
  name: String,
  dueDate: String,
  tasks: [
    {
      name2: String,
      dept: String,
      teamLead: String,
      progress: String,
      dueDate2: String,
      priority: String
    }
  ]
})

module.exports= mongoose.model("Goal", GoalSchema)