const express = require('express');
const router = express.Router();
const calController = require('../controller/calController');


router.post('/add', calController.add);
router.post('/subtract', calController.subtract);
router.post('/multiply', calController.multiply);
router.post('/divide', calController.divide);

module.exports = router;
