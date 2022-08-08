import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectAllTimetables,
  selectTimetableById,
} from "../features/timetables/timetableSlice";
import Spinner from "../components/Spinner";

function ViewCourse() {
  const params = useParams();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, message } = useSelector(selectAllTimetables);

  const timetable = useSelector((state) =>
    selectTimetableById(state, params.timetableId)
  );

  const course = timetable.courses.find(
    (course) => course._id === params.courseId
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }
  }, [user, navigate, isError, message]);

  const [formData, setFormData] = useState({
    crn: course.crn,
    course_number: course.course_number,
    section: course.section,
    campus: course.campus,
    status: course.status,
    instructional_method: course.instructional_method,
    instructor_name: course.instructor_name,
    meeting_type: course.meeting_type,
    session: course.session,
    start_date: course.start_date,
    end_date: course.end_date,
    days: course.days,
    start_time: course.start_time,
    end_time: course.end_time,
    meeting_room_type: course.meeting_room_type,
    meeting_room_preference: course.meeting_room_preference,
    exam_date_time: course.exam_date_time,
    exam_room_type: course.exam_room_type,
    exam_room_preference: course.exam_room_preference,
    class_size: course.class_size,
    reserved_seats: course.reserved_seats,
    overflow: course.overflow,
    remove_reserves_date: course.remove_reserves_date,
    fee_detail_code: course.fee_detail_code,
    additional_mandatory_course_fee: course.additional_mandatory_course_fee,
    funding_source: course.funding_source,
    banner_codes: course.banner_codes,
    matrix_code: course.matrix_code,
    crosslist_code: course.crosslist_code,
    link_id: course.link_id,
    zedcred: course.zedcred,
    restrictions: course.restrictions,
    additional_information: course.additional_information,
  });

  const {
    crn,
    course_number,
    section,
    campus,
    status,
    instructional_method,
    instructor_name,
    meeting_type,
    session,
    start_date,
    end_date,
    days,
    start_time,
    end_time,
    meeting_room_type,
    meeting_room_preference,
    exam_date_time,
    exam_room_type,
    exam_room_preference,
    class_size,
    reserved_seats,
    overflow,
    remove_reserves_date,
    fee_detail_code,
    additional_mandatory_course_fee,
    funding_source,
    banner_codes,
    matrix_code,
    crosslist_code,
    link_id,
    zedcred,
    restrictions,
    additional_information,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="container mx-auto pt-20">
      <div>
        <div className="text-primary font-medium text-sm  text-center inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <Link to={`/timetable-dashboard/${timetable._id}`}>
            Back to Course Dashboard
          </Link>
        </div>
      </div>
      <div className="max-w-sm mx-auto">
        <div className="mb-6 text-center">
          <h3 className="mb-4 text-2xl md:text-3xl font-bold">View Course</h3>
        </div>
      </div>
      <div className="px-4 flex w-1/4 justify-between">
        <div className="">
          <h3 className="mt-6 text-sm text-gray-500">Subject</h3>
          <p className="text-base font-semibold text-gray-900">
            {timetable.subject}
          </p>
        </div>
        <div className="">
          <h3 className="mt-6 text-sm text-gray-500">Term Code</h3>
          <p className="text-base font-semibold text-gray-900">
            {timetable.term_code}
          </p>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Course Information
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="crn"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CRN
                      </label>
                      <input
                        type="text"
                        name="crn"
                        id="crn"
                        value={crn}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="course_number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Course Number
                      </label>
                      <input
                        type="text"
                        name="course_number"
                        id="course_number"
                        value={course_number}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="section"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Section
                      </label>
                      <input
                        type="text"
                        name="section"
                        id="section"
                        value={section}
                        onChange={onChange}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="campus"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Campus
                      </label>
                      <input
                        type="text"
                        name="campus"
                        id="campus"
                        value={campus}
                        onChange={onChange}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Status
                      </label>
                      <input
                        type="text"
                        name="status"
                        id="status"
                        value={status}
                        onChange={onChange}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <Link
                      to={`/timetable-dashboard/${timetable._id}/edit-course/${course._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Instruction Information
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="instructional_method"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Intsructional Method
                      </label>
                      <input
                        type="text"
                        name="instructional_method"
                        id="instructional_method"
                        value={instructional_method}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="instructor_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Instructor Name
                      </label>
                      <input
                        type="text"
                        name="instructor_name"
                        id="instructor_name"
                        value={instructor_name}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Meeting Information
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="meeting_type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Meeting Type
                      </label>
                      <input
                        type="text"
                        name="meeting_type"
                        id="meeting_type"
                        value={meeting_type}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="session"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Session
                      </label>
                      <input
                        type="text"
                        name="session"
                        id="session"
                        value={session}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="start_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Date
                      </label>
                      <input
                        type="text"
                        name="start_date"
                        id="start_date"
                        value={start_date}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="end_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Date
                      </label>
                      <input
                        type="text"
                        name="end_date"
                        id="end_date"
                        value={end_date}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="days"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Days
                      </label>
                      <input
                        type="text"
                        name="days"
                        id="days"
                        value={days}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="start_time"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Time
                      </label>
                      <input
                        type="text"
                        name="start_time"
                        id="start_time"
                        value={start_time}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="end_time"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Time
                      </label>
                      <input
                        type="text"
                        name="end_time"
                        id="end_time"
                        value={end_time}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="meeting_room_type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Room Type
                      </label>
                      <input
                        type="text"
                        name="meeting_room_type"
                        id="meeting_room_type"
                        value={meeting_room_type}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="meeting_room_preference"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Room Preference
                      </label>
                      <input
                        type="text"
                        name="meeting_room_preference"
                        id="meeting_room_preference"
                        value={meeting_room_preference}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Final Exam Information
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="exam"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Exam Y/N
                      </label>
                      <input
                        type="text"
                        name="exam"
                        id="exam"
                        value="test"
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="exam_date_time"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Exam Date and Time
                      </label>
                      <input
                        type="text"
                        name="exam_date_time"
                        id="exam_date_time"
                        value={exam_date_time}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="exam_room_type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Room Type
                      </label>
                      <input
                        type="text"
                        name="exam_room_type"
                        id="exam_room_type"
                        value={exam_room_type}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="exam_room_preference"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Room Preference
                      </label>
                      <input
                        type="text"
                        name="exam_room_preference"
                        id="exam_room_preference"
                        value={exam_room_preference}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Class Size/Reserves
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="class_size"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Class Size
                      </label>
                      <input
                        type="text"
                        name="class_size"
                        id="class_size"
                        value={class_size}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="reserved_seats"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Reserved Seats
                      </label>
                      <input
                        type="text"
                        name="reserved_seats"
                        id="reserved_seats"
                        value={reserved_seats}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="overflow"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Overflow
                      </label>
                      <input
                        type="text"
                        name="overflow"
                        id="overflow"
                        value={overflow}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="remove_reserves_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date reserves to be removed
                      </label>
                      <input
                        type="text"
                        name="remove_reserves_date"
                        id="remove_reserves_date"
                        value={remove_reserves_date}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Fee Information
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="fee_detail_code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Fee Detail Code
                      </label>
                      <input
                        type="text"
                        name="fee_detail_code"
                        id="fee_detail_code"
                        value={fee_detail_code}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="additional_mandatory_course_fee"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Additional mandatory course fee
                      </label>
                      <input
                        type="text"
                        name="additional_mandatory_course_fee"
                        id="additional_mandatory_course_fee"
                        value={additional_mandatory_course_fee}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="funding_source"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Funding Source
                      </label>
                      <input
                        type="text"
                        name="funding_source"
                        id="funding_source"
                        value={funding_source}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Miscellaneous
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="banner_codes"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Banner codes
                      </label>
                      <input
                        type="text"
                        name="banner_codes"
                        id="banner_codes"
                        value={banner_codes}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="matrix_code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Matrix code
                      </label>
                      <input
                        type="text"
                        name="matrix_code"
                        id="matrix_code"
                        value={matrix_code}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="crosslist_code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Crosslist code
                      </label>
                      <input
                        type="text"
                        name="crosslist_code"
                        id="crosslist_code"
                        value={crosslist_code}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="link_id"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Link ID
                      </label>
                      <input
                        type="text"
                        name="link_id"
                        id="link_id"
                        value={link_id}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Zedcred
                      </label>
                      <input
                        type="text"
                        name="zedcred"
                        id="zedcred"
                        value={zedcred}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="restrictions"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Restrictions
                      </label>
                      <input
                        type="text"
                        name="restrictions"
                        id="restrictions"
                        value={restrictions}
                        disabled
                        className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="additional_information"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Additional Information
                    </label>
                    <input
                      type="text"
                      name="additional_information"
                      id="additional_information"
                      value={additional_information}
                      disabled
                      className="mt-1 bg-gray-100 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewCourse;
