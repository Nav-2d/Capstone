const mongoose = require("mongoose");

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
      ref: "User",
    },
    term_code: {
      type: String,
      required: [true, "Please enter a term code"],
    },
    subject: {
      type: String,
      required: [true, "Please enter a subject"],
    },
    courses: [
      {
        crn: String,
        course_number: String,
        section: String,
        campus: String,
        status: String,
        instructional_method: String,
        instructor_name: String,
        meeting_type: String,
        session: String,
        start_date: String,
        end_date: String,
        days: String,
        start_time: String,
        end_time: String,
        meeting_room_type: String,
        meeting_room_preference: String,
        exam_date_time: String,
        exam_room_type: String,
        exam_room_preference: String,
        class_size: String,
        reserved_seats: String,
        overflow: String,
        remove_reserves_date: String,
        fee_detail_code: String,
        additional_mandatory_course_fee: String,
        funding_source: String,
        banner_codes: String,
        matrix_code: String,
        crosslist_code: String,
        link_id: String,
        zedcred: String,
        restrictions: String,
        additional_information: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Parent", parentSchema);
