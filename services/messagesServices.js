const asyncHandler = require("express-async-handler");
const Messages = require("../config/models/messagesModel");

// @desc GET Messages
// @route GET /api/v1/messages/:id
// access Public
exports.getMessages = asyncHandler(async (req, res) => {
  const messages = await Messages.find({});

  res.status(200).json({ data: messages });
});

// @desc POST Messages
// @route GET /api/v1/messages/:id
// access Public
exports.createMessages = asyncHandler(async (req, res) => {
  const messages = await Messages.create(req.body);

  res.status(201).json({ data: messages });
});

// @desc DELETE Messages
// @route GET /api/v1/messages/:id
// access PRIVATE
exports.deleteMessages = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const messages = await Messages.findByIdAndDelete(id);

  if (!messages) {
    return res.status(404).json({ msg: `No messages Found For This ID ${id}` });
  }

  res.status(204).send();
});
