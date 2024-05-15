const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  number: String,
  annotations: [String],
});

module.exports = mongoose.model('Question', questionSchema);