const express = require('express');
const router = express.Router();
const opinionsController = require('../controllers/opinionsController');


router.get('/', opinionsController.listAll);

router.get('/dogid/:id', opinionsController.listwithDogId);

router.post('/new', opinionsController.create);

router.get('/show/:id', opinionsController.listOne);

router.put('/edit/:id', opinionsController.update);

router.delete('/delete/:id', opinionsController.drop);

router.delete('/deletebydogid/:id', opinionsController.dropByDogId);

module.exports = router;
