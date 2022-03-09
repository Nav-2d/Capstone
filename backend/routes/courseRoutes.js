const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getCourses).post(protect, addCourse);
router
  .route('/:id')
  .get(protect, getCourse)
  .delete(protect, deleteCourse)
  .put(protect, updateCourse);

module.exports = router;
