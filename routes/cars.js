'use strict'
const router = require('express').Router();
const car = require('../controllers/car');

router.get('/', car.getAll);
router.post('/update/:id', car.updateOne);
router.post('/add', car.toCreate);
router.get('/delete/:id', car.deleteOne);

module.exports = router;
