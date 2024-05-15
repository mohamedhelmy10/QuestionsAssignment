const express = require("express");

const router = express();

const questionsCtrl = require("../controllers/questions");
router.get("/", questionsCtrl.getQuestionNumbers);
module.exports = router;