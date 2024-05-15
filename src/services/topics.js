
const { findTopicByName, findSubTopics } = require('../repositories/topic');

const getSubtopicNames = async (topicName) => {
    const topic = await findTopicByName(topicName);
    let subTopics = [];
    if(topic){
        subTopics = await findSubTopics(topic.left, topic.right);
    }
    return subTopics.map(t => t.name);
}

const TopicsService = { getSubtopicNames };
module.exports = TopicsService;