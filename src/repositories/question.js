
const Question = require('../models/question');

const findQuestionsOfTopics = async (topicNames) => {
    return await Question.find({annotations: { $in: topicNames }}).exec();
};

const insertManyQuestions = async (questions) => {
    await Question.insertMany(questions);
};

const deleteAll = async () => {
    await Question.deleteMany({});
};

const QuestionRepository = { findQuestionsOfTopics, insertManyQuestions, deleteAll };
module.exports = QuestionRepository;