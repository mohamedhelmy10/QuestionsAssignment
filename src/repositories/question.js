
const Question = require('../models/question');

const findQuestionsOfTopics = async (topicNames) => {
    return await Question.find({annotations: { $in: topicNames }}).exec();
}

const QuestionRepository = { findQuestionsOfTopics };
module.exports = QuestionRepository;