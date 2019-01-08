var express = require('express');
var router = express.Router();
const checkAuth = require ('../../middleware/check-auth');

var TeaController = require('../../controllers/tea.controller.js');

router.get('/', TeaController.getTeas);
router.post('/', checkAuth, TeaController.createTea);
router.put('/', checkAuth, TeaController.updateTea);
router.delete('/:id', checkAuth, TeaController.removeTea);
router.get('/:id', TeaController.getTea);

module.exports = router;