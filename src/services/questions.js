
const { findQuestionsOfTopics } = require('../repositories/question');

const getQuestionsOfTopics = async (topicNames) => {
    const questions = await findQuestionsOfTopics(topicNames);
    return questions.map(q => q.number);
}

const QuestionsService = { getQuestionsOfTopics };
module.exports = QuestionsService;