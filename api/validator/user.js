const { body, query } = require("express-validator");
const User = require('../models/user')
exports.userCreateValidator = [
    body("username")
        .exists()
        .notEmpty()
        .withMessage('fullName required')
        .custom(async value => {
            let checkUser = await User.findOne({ userName: value.toLowerCase() })
            if (checkUser) {
                return Promise.reject("User already exist.");
            }
        }),
    body('password')
        .exists()
        .withMessage('password required'),
    body('email')
        .exists()
        .notEmpty()
        .withMessage('email required')
        .custom(async value => {
            let checkUser = await User.findOne({ email: value.toLowerCase() })
            if (checkUser) {
                return Promise.reject("Email already exist.");
            }
        })
      
]
exports.userLoginValidator = [
    body('password')
        .exists()
        .withMessage('password required'),
    body('email')
        .exists()
        .notEmpty()
        .withMessage('email required')
        
]

