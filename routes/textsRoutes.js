const express = require("express");
const router = express.Router();
const {getTexts} = require('../services/textsServices')

const {createPersonalInfoValidator , updatePersonalInfoValidator} = require('../utils/validators/personalInfoValidator')



router
  .route("/")
  .get(getTexts)




router
  .route("/:id")

  


  module.exports = router