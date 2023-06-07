const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/customer', customerController.getCustomers);
router.get('/customer/:id', customerController.getCustomer);
router.post('/customer', customerController.createCustomer);
router.put('/customer/:id', customerController.updateCustomer);
router.delete('/customer/:id', customerController.deleteCustomer);


module.exports = router;