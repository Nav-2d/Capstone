const asyncHandler = require('express-async-handler');
const Parent = require('../models/sampleModel');

// @desc Get Timetables
// @route GET /api/sample
// @access Private
const getParents = asyncHandler(async (req, res) => {
  const parents = await Parent.find({ user: req.user.id });
  res.status(200).json(parents);
});

// @desc Add Timetable
// @route POST /api/sample
// @access Private
const addParent = asyncHandler(async (req, res) => {
  const { term_code, subject } = req.body;
  if (!term_code || !subject) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  const parent = await Parent.create({
    term_code,
    subject,
    userId: req.user.id,
  });
  res.status(200).json(parent);
});

// @desc Get Timetable
// @route GET /api/sample/:id
// @access Private
const getParent = asyncHandler(async (req, res) => {
  const parent = await Parent.findById(req.params.id);
  res.status(200).json(parent);
});

const patchParent = asyncHandler(async (req, res) => {
  const parent = await Parent.findById(req.params.id)

  if (!parent) {
    res.status(400)
    throw new Error('Parent not found')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (parent.userId.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  const updatedParent = await Parent.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedParent);
});

const deleteParent = asyncHandler(async (req, res) => {
  const parent = await Parent.findById(req.params.id)

  if (!parent) {
    res.status(400)
    throw new Error('Timetable not found')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (parent.userId.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await parent.remove()

  res.status(200).json({ _id: req.params.id })
});

module.exports = {
  getParents,
  addParent,
  getParent,
  patchParent,
  deleteParent
};
