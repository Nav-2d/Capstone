const asyncHandler = require('express-async-handler');
const Timetable = require('../models/timetableModel');

// @desc Get Timetables
// @route GET /api/timetables
// @access Private
const getTimetables = asyncHandler(async (req, res) => {
  const timetables = await Timetable.find({ user: req.user.id });
  res.status(200).json(timetables);
});

// @desc Add Timetable
// @route POST /api/timetables
// @access Private
const addTimetable = asyncHandler(async (req, res) => {
  const { term_code, subject } = req.body;
  if (!term_code || !subject) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  const timetable = await Timetable.create({
    term_code,
    subject,
    user: req.user.id,
  });
  res.status(200).json(timetable);
});

// @desc Get Timetable
// @route GET /api/timetable/:id
// @access Private
const getTimetable = asyncHandler(async (req, res) => {
  const timetable = await Timetable.findById(req.params.id);
  res.status(200).json(timetable);
});

// @desc Update Timetable
// @route PUT /api/timetables/:id
// @access Private
const updateTimetable = asyncHandler(async (req, res) => {
  const timetable = await Timetable.findById(req.params.id);

  if (!timetable) {
    res.status(400);
    throw new Error('Timetable not found');
  }

  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (timetable.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  const updatedTimetable = await Timetable.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedTimetable);
});

// @desc Delete Timetable
// @route DELETE /api/timetables/:id
// @access Private
const deleteTimetable = asyncHandler(async (req, res) => {
  const timetable = await Timetable.findById(req.params.id);

  if (!timetable) {
    res.status(400);
    throw new Error('Timetable not found');
  }

  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (timetable.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await timetable.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTimetables,
  addTimetable,
  getTimetable,
  updateTimetable,
  deleteTimetable,
};
