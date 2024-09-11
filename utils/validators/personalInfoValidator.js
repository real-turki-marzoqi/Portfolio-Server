const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

// Validator for creating personal information
exports.createPersonalInfoValidator = [
    // Validate name
    check('name')
        .notEmpty().withMessage('The name is required')
        .isLength({ min: 3 }).withMessage("Name must be at least 3 characters")
        .isLength({ max: 50 }).withMessage("Name must be at max 50 characters"),

    // Validate email
    check('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .trim()
        .toLowerCase(),

    // Validate number
    check('number')
        .notEmpty().withMessage('The number is required')

    // Validator middleware
    ,validatorMiddleWare
];
