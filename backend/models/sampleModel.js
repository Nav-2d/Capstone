const mongoose = require('mongoose');

// const courseSchema = new Schema({
//   course_number: String,
//   section: String,
//   campus: String
// })

const parentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    term_code: {
      type: String,
      required: [true, 'Please enter a term code'],
    },
    subject: {
      type: String,
      required: [true, 'Please enter a subject'],
    },
    courses: [{
      crn: String,
      course_number: String,
      section: String,
      campus: String,
      status: String,
      instructional_method: String,
      instructor_name: String
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Parent', parentSchema);
