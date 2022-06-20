const express = require('express');
const router = express.Router();

const {
  getParents,
  getParent,
  addParent,
  patchParent,
  deleteParent
} = require('../controllers/sampleController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getParents).post(protect, addParent);
router
  .route('/:id')
  .get(protect, getParent)
  .patch(protect, patchParent)
  .delete(protect, deleteParent);

module.exports = router;
