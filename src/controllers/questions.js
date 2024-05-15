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
      return await getQuestionsOfTopics(topicNames);
    } catch (error) {
        console.log(error);
        res.status(error.code).send(error.message);
    }
};