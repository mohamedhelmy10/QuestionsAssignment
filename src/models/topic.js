const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  left: Number,
  right: Number
});

module.exports = mongoose.model('Topic', topicSchema);