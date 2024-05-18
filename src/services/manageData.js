const XLSX = require('xlsx');
const { insertQuestionsData, deleteAllQuestions} = require('./questions');
const { insertTopicsData, deleteAllTopics } = require('./topics');

const importDataFromExcel = async (filePath) => {
  try {
    const file = XLSX.readFile(filePath);
    const questionsSheetName = file.SheetNames[0];
    const topicsSheetName = file.SheetNames[1];
    const questionsSheet = file.Sheets[questionsSheetName];
    const topicsSheet = file.Sheets[topicsSheetName];
    const questionsData = XLSX.utils.sheet_to_json(questionsSheet);
    const topicsData = XLSX.utils.sheet_to_json(topicsSheet);

    await insertQuestionsData(questionsData);
    await insertTopicsData(topicsData);
    console.log('Data imported successfully');
  } catch (err) {
    console.error('Error importing data:', err.message);
  }
};

const deleteAllData = async () => {
  await deleteAllQuestions();
  await deleteAllTopics();
};

const manageDataService = { importDataFromExcel, deleteAllData };
module.exports = manageDataService;