const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const wordFinderController = require('../controllers/wordFinderController');

router.get('/1', homeController.home);
router.get('/', wordFinderController.wordFinder);

module.exports = router;