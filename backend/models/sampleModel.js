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
      course_number: String,
      section: String,
      campus: String
    }]
  },
  {
    timestamps: true,
  }
);

// module.exports.Courses = mongoose.model('Courses', courseSchema);
module.exports = mongoose.model('Parent', parentSchema);
