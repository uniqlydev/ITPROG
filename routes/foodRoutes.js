const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/food', foodController.getFoods);
router.get('/food/:id', foodController.getFoodByID);
router.get('/food/type/:type', foodController.getAllPerType);
router.post('/food', foodController.createFood);
router.put('/food/:id', foodController.updateFood);
router.delete('/food/:id', foodController.deleteFood);

module.exports = router;