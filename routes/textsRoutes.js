const express = require("express");

const router = express.Router();
const {
  getTexts,
  creatTexts,
  updateTexts,
} = require("../services/textsServices");

const { updateTextsValidator } = require("../utils/validators/textsValidator");



//Texts Routes
router.route("/").get(getTexts).post(creatTexts);

router.route("/:id").put(updateTextsValidator, updateTexts);

module.exports = router;
