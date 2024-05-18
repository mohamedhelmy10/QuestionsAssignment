const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  parent: { type: String, default: null }
});

module.exports = mongoose.model('Topic', topicSchema);