const Users = require('./schemas/users');
const VerificationCodes = require('./schemas/verificationCodes');

function initializeAllModels(mongoose) {
    return {
        Users: Users(mongoose),
        VerificationCodes: VerificationCodes(mongoose),
    }
}

module.exports = initializeAllModels;