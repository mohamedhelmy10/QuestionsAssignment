
const Topic = require('../models/topic');

const findTopicByName = async (topicName) => {
    return await Topic.findOne({ name: topicName }).exec();
}

const findSubTopics = async (topicLeft, topicRight) => {
    return await Topic.find( { left: { $gte: topicLeft }, right: { $lte: topicRight } } );
}

const TopicRepository = { findTopicByName, findSubTopics };
module.exports = TopicRepository;