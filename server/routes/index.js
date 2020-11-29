const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const wordFinderController = require('../controllers/wordFinderController');
const graphController = require('../controllers/graphController');
const resultsController = require('../controllers/resultsController');
const getUserDataController = require('../controllers/getUserDataController');

router.get('/graph', wordFinderController.wordFinder, graphController.graph);

router.get('/', homeController.home);

router.get('/results', resultsController.results);

router.get('/getUser', getUserDataController.get);

module.exports = router;