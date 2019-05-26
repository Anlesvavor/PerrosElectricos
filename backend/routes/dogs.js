const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogsController');


router.get('/', dogsController.listAll);

router.post('/new', dogsController.create);

router.get('/show/:id', dogsController.listOne);

router.put('/edit/:id', dogsController.update);

router.delete('/delete/:id', dogsController.drop);


module.exports = router;
