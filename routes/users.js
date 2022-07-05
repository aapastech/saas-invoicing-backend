var express = require('express');
var router = express.Router();
const controller = require('../Controller/Users');
const authController = require('../Controller/Auth/');
const validators = require('../validate/users');
const adminValidators = require('../validate/admin');

router.route('/')
    .get(authController.preAuthorization, controller.getUser)
    .post(validators.createUser, controller.createUser)
    .put(authController.preAuthorization, validators.updateUser, controller.updateUser);

router.get(
    '/all',
    authController.preAuthorization, 
    adminValidators.verifyAdmin,
    controller.getAllUsers
);

router.put(
    '/suspend/:id',
    authController.preAuthentication,
    adminValidators.verifyAdmin,
    controller.suspendUser
);

router.post(
    '/login', 
    authController.preAuthentication, 
    authController.getUserLogIn
);

router.post(
    '/verify', 
    validators.verifyVerificationCode, 
    authController.getResetPassToken
);

router.get(
    '/verify/:verificationToken', 
    validators.verifyEmail, 
    controller.verifyUserEmail
);

router.get(
    '/:username/verification', 
    validators.getUserVerificationCode, 
    authController.getUserVerficiationCode
);

module.exports = router;
