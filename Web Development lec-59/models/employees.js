const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String
});

const Employees = mongoose.model('employees', employeesSchema);

// Correct export (should be `module.exports`, not `module.export`)
module.exports = Employees;

