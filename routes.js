var express = require('express');
var configurationController = require('./configuration/configuration.controller');
var ansibleController = require('./ansible/ansible.controller');

var router = express.Router();

router.route('/commitConfiguration').post(configurationController.commitConfiguration);
router.route('/fetchAnsibleConfiguration/:name').get(ansibleController.fetchAnsibleConfiguration);

module.exports = router;