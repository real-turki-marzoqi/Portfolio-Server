const asyncHandler = require("express-async-handler");
const Texts = require("../config/models/textsModels");

// @desc GET TEXTS
// @route GET /api/v1/texts/:id
// access Public
exports.getTexts = asyncHandler(async (req, res) => {
  const texts = await Texts.find({});

  res.status(200).json({ data: texts });
});

// @desc CREATE TEXTS
// @route POST /api/v1/texts/:id
// access Private
exports.creatTexts = asyncHandler(async (req, res) => {
  const texts = await Texts.create(req.body);

  res.status(201).json({ data: texts });
});

// @desc Update TEXTS
// @route PUT /api/v1/texts/:id
// access Private
exports.updateTexts = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const texts = await Texts.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  if (!texts) {
    return res.status(404).json({ msg: `No  Texts Found For This ID ${id}` });
  }

  res.status(200).json({ data: texts });
});
