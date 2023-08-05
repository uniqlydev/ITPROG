const express = require('express');
const router = express.Router();
const comboController = require('../controllers/comboController');

router.get('/combo', comboController.getCombos);
router.get('/combo/:id', comboController.getCombo);


module.exports = router;