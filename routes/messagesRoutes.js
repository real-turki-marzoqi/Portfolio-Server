const express = require("express");
const router = express.Router();
const {
  getMessages,
  createMessages,
  deleteMessages,
} = require("../services/messagesServices");

const {
  createMessageValidator,
  deleteMessagesValidator,
} = require("../utils/validators/messagesValidator");

// MESSAGES ROUTES
router.route("/").get(getMessages).post(createMessageValidator, createMessages);

router.route("/:id").delete(deleteMessagesValidator, deleteMessages);

module.exports = router;
