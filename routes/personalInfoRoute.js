const express = require("express");
const router = express.Router();
const {getPersonalIno , createPersonalInfo , updatePersonalInfo} = require('../services/presonalInfoServices')

const {createPersonalInfoValidator , updatePersonalInfoValidator} = require('../utils/validators/personalInfoValidator')



router
  .route("/")
  .get(getPersonalIno)
  .post(createPersonalInfoValidator , createPersonalInfo)



router
  .route("/:id")
  .put(updatePersonalInfoValidator ,updatePersonalInfo )
  


  module.exports = router