const express = require('express');
const router = express.Router();

const officesController = require('../controllers/officesController');

router.get('/', officesController.getAllOffices);
router.get('/:officecode', officesController.getOfficesByOfficeCode);
router.post('/', officesController.createOffice);
router.put('/:officecode', officesController.updateOffice);
router.delete('/:officecode', officesController.deleteOffice);

module.exports = router