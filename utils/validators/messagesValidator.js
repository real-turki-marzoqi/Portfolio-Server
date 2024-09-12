const { check } = require("express-validator");
const validatorMiddleWare = require("../../middleWares/validatorMiddleWare");

// Create message validations
exports.createMessageValidator = [
  check("SenderName")
  .notEmpty()
  .withMessage("Sender Name Is Required"),

  check("title")
  .notEmpty()
  .withMessage("Message Title Is Required"),

  check("senderEmail")
    .notEmpty()
    .withMessage("SenderEmail Is Required")
    .isEmail()
    .withMessage("Invalid Email Format"),

  check("messageContent").notEmpty().withMessage("messageContent Is Required"),

  validatorMiddleWare,
];


// Delete message validations
exports.deleteMessagesValidator = [
    
    check('id')
    .isMongoId('Invalid Message Id format')
    ,
    validatorMiddleWare
]

