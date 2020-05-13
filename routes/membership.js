var express = require('express');
var router = express.Router();
const controller = require('../Controller/Membership');
const authController = require('../Controller/Auth/');
const validators = require('../validate/membership');

router.route('/')
    .get(authController.preAuthorization, controller.getUserMembership)
    .post(validators.upgradeMembership, controller.upgradeUserMembership);

module.exports = router;
