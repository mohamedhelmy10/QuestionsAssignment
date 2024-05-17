const { getQuestionsOfTopics } = require('../services/questions');
const { getSubtopicNames } = require('../services/topics');


module.exports.getQuestionNumbers = async (req, res) => {
    try {
      const { q } = req.query;
      if (!q) {
        const error = new Error();
        error.code = 400;
        error.message = "No parameters provided!";
        throw error;
      }
      const topicNames = await getSubtopicNames(q);
      const questionNumbers = await getQuestionsOfTopics(topicNames);
      return res.status(200).json(questionNumbers);
    } catch (error) {
        console.log(error);
        res.status(error.code).send(error.message);
    }
};