const { check } = require("express-validator");
const validatorMiddleWare = require("../../middleWares/validatorMiddleWare");


// Update Texts validations
exports.updateTextsValidator = [

    check('id')
    .isMongoId().withMessage('Invalid Text Id')
    ,
    validatorMiddleWare

]