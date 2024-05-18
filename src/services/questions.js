
const { findQuestionsOfTopics, insertManyQuestions, deleteAll } = require('../repositories/question');

const getQuestionsOfTopics = async (topicNames) => {
    const questions = await findQuestionsOfTopics(topicNames);
    return questions.map(q => q.number);
};

const insertQuestionsData = async (questionsData) => {
    let questions = [];
    questionsData.forEach(questionData => {
        let question = {number: 0, annotations: []};
        for (const key in questionData) {
            if (questionData.hasOwnProperty(key)) {
                if (key === 'Question number') {
                    question.number = questionData[key];
                } else {
                    question.annotations.push(questionData[key]);
                }
            }
        }
        questions.push(question);
    });
    await insertManyQuestions(questions);
};

const deleteAllQuestions = async () => {
    await deleteAll();
};

const QuestionsService = { getQuestionsOfTopics, insertQuestionsData, deleteAllQuestions };
module.exports = QuestionsService;
