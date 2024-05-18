const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true },
  annotations: [String],
});

module.exports = mongoose.model('Question', questionSchema);