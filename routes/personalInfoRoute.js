const express = require("express");
const router = express.Router();
const {getPersonalIno , createPersonalInfo} = require('../services/presonalInfoServices')

const {createPersonalInfoValidator} = require('../utils/validators/personalInfoValidator')



router
  .route("/")
  .get(getPersonalIno)
  .post(createPersonalInfoValidator , createPersonalInfo)



router
  .route("/:id")
  


  module.exports = router