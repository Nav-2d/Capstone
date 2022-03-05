const express = require('express');

const {
  getTimetable,
  addTimetable,
  updateTimetable,
  deleteTimetable,
} = require('../controllers/timetableController');
const router = require('./userRoutes');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTimetable).post(protect, addTimetable);
router
  .route('/:id')
  .delete(protect, deleteTimetable)
  .put(protect, updateTimetable);

module.exports = router;
