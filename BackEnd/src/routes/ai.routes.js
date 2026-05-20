const express = require('express');
const aiController = require('../controller/ai.controller'); // Fixed plural folder name

const router = express.Router();

router.post("/get-review", aiController.getReview);

module.exports = router;