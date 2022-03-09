const express = require('express');
const router = express.Router();
const {
  getTimetables,
  addTimetable,
  getTimetable,
  updateTimetable,
  deleteTimetable,
} = require('../controllers/timetableController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTimetables).post(protect, addTimetable);
router
  .route('/:id')
  .get(protect, getTimetable)
  .delete(protect, deleteTimetable)
  .put(protect, updateTimetable);

module.exports = router;
