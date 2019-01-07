var express = require('express');
var router = express.Router();

var TeaController = require('../../controllers/tea.controller.js');
const isAuth = require('../../middleware/is-auth');
router.get('/', TeaController.getTeas);
router.post('/', isAuth, TeaController.createTea);
router.put('/', isAuth, TeaController.updateTea);
router.delete('/:id', isAuth, TeaController.removeTea);
router.get('/:id', TeaController.getTea);

module.exports = router;