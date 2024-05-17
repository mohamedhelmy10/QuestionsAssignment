
const Topic = require('../models/topic');

const findAllTopics = async() => {
    return await Topic.find();
};

const insertManyTopics = async (topics) => {
    await Topic.insertMany(topics);
};

const deleteAll = async () => {
    await Topic.deleteMany({});
};
 
const TopicRepository = { findAllTopics, insertManyTopics, deleteAll };
module.exports = TopicRepository;