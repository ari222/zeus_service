var express = require('express');
var configurationController = require('./configuration/configurationController');

var router = express.Router();

router.route('/commitConfiguration').post(configurationController.commitConfiguration);

module.exports = router;