const asyncHandler = require('express-async-handler');
const Timetable = require('../models/timetableModel');

// @desc Get Courses
// @route GET /api/courses
// @access Private
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ user: req.params.id });
  res.status(200).json(courses);
});

// @desc Add Courses
// @route POST /api/courses
// @access Private
const addCourse = asyncHandler(async (req, res) => {
  const { course_number, section, campus } = req.body;
  if (!course_number || !section || !campus) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  const timetable = await Timetable.create({
    course_number,
    section,
    campus,
    timetable: req.params.id,
    user: req.user.id,
  });
  res.status(200).json(timetable);
});

// @desc Get Courses
// @route GET /api/courses
// @access Private
const getCourse = asyncHandler(async (req, res) => {
  const timetable = await Timetable.findById(req.params.id);
  res.status(200).json(timetables);
});

// @desc Update Timetable
// @route PUT /api/timetables/:id
// @access Private
const updateCourse = asyncHandler(async (req, res) => {
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
const deleteCourse = asyncHandler(async (req, res) => {
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
  getCourses,
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
};
