const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: String,
  task: String,
  taskDesc: String,
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;