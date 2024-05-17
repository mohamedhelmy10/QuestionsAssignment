
const { findAllTopics, insertManyTopics, deleteAll } = require('../repositories/topic');

const getSubtopicNames = async (topicName) => {
    const topics = await findAllTopics();
    const parentTopic = topics.find(t => t.name === topicName);
    const subTopics = new Set();

    const traverse = (topic) => {
        subTopics.add(topic.name);
        topics.forEach(t => {
            if (t.parent === topic.name) {
                traverse(t);
            }
        });
    };

    if (parentTopic) traverse(parentTopic);
    
    return Array.from(subTopics);
}

const insertTopicsData = async (topicsData) => {
    let rootTopic = { name: "root", parent: null}
    let topics = [rootTopic];
    const topicsSet = new Set();
    topicsSet.add("root");

    topicsData.forEach(topicData => {
        let parentTopic = rootTopic.name;
        for (const key in topicData) {
            const topicName = topicData[key];
            if (topicData.hasOwnProperty(key) && !topicsSet.has(topicName)) {
                const topic = {name: topicName, parent: parentTopic};
                topics.push(topic);
                topicsSet.add(topicName);
            }
            parentTopic = topicName;
        }
    });
    await insertManyTopics(topics);
};


const deleteAllTopics = async () => {
    await deleteAll();
};

const TopicsService = { getSubtopicNames, insertTopicsData, deleteAllTopics };
module.exports = TopicsService;
