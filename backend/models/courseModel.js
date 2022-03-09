const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    timetable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Timetable',
    },
    course_number: {
      type: String,
      required: [true, 'Please enter a course number'],
    },
    section: {
      type: String,
      required: [true, 'Please enter a section'],
    },
    campus: {
      type: String,
      required: [true, 'Please enter a campus'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course', courseSchema);
