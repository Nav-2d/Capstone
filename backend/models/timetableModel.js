const mongoose = require('mongoose');

const timetableSchema = mongoose.Schema(
  {
    user: {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Timetable', timetableSchema);
