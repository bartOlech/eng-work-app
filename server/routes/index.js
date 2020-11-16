const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const wordFinderController = require('../controllers/wordFinderController');
const graphController = require('../controllers/graphController');

router.get('/graph', wordFinderController.wordFinder, graphController.graph);

router.get('/', wordFinderController.wordFinder);

module.exports = router;