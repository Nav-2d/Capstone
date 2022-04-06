import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTimetable } from '../features/timetables/timetableSlice';

function AddCourse() {
  const [formData, setFormData] = useState({
    subject: '',
    term_code: '',
  });

  const { subject, term_code } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createTimetable({ ...formData }));
    setFormData('');
    navigate('/timetable-dashboard');
  };

  return (
    <section className='container mx-auto pt-20'>
      <div>
        <div class='text-primary font-medium text-sm  text-center inline-flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
          <div className='pl-2'>
            <Link to='/course-dashboard'>Back to Course Dashboard</Link>
          </div>
        </div>
      </div>
      <div className='max-w-sm mx-auto'>
        <div className='mb-6 text-center'>
          <h3 className='mb-4 text-2xl md:text-3xl font-bold'>Add Course</h3>
        </div>
      </div>
      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>
      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Course Information
              </h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        CRN
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Subject
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Course Number
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Section
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Campus
                      </label>
                      <select name='campus' id='campus' autoComplete='on' className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                        <option value=" ">-- Select Campus --</option>
                        <option value="Civic">Civic</option>
                        <option value="Cloverdale">Cloverdale</option>
                        <option value="Langley">Langley</option>
                        <option value="Online">Online</option>
                        <option value="Richmond">Richmond</option>
                        <option value="Surrey">Surrey</option>
                      </select>
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Status
                      </label>

                      <select name='status' id='status' autoComplete='on' className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                        <option value=" ">-- Select Status --</option>
                        <option value="Active">Active</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Suspended">Suspended</option>
                        <option value="Delete">Delete</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Instruction Information
              </h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Intsructional Method
                      </label>
                      <select name='instructional_method' id='instructional_method' autoComplete='on' className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                        <option value=" ">-- Select Instructional Method --</option>
                        <option value="Blended Asynchronous Delivery">Blended Asynchronous Delivery</option>
                        <option value="Blended Synchronous Delivery">Blended Synchronous Delivery</option>
                        <option value="In Person">In Person</option>
                        <option value="Online Asynchronous Delivery">Online Asynchronous Delivery</option>
                        <option value="Online Synchronous Delivery">Online Synchronous Delivery</option>
                      </select>
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Instructor Name
                      </label>
                      <input
                        type='text'
                        name='instructor_name'
                        id='instructor_name'
                        autoComplete='on'
                        placeholder='Lastname, Firstname'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Meeting Information
              </h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Meeting Type
                      </label>
                      <select name='meeting_type' id='meeting_type' autoComplete='on' className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                        <option value=" ">-- Select Meeting Type --</option>
                        <option value="Class">Class</option>
                        <option value="Evaluation">Evaluation</option>
                        <option value="Lab">Lab</option>
                        <option value="Midterm">Midterm</option>
                        <option value="Orientation">Orientation</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Theory">Theory</option>
                        <option value="Work Exp">Work Experience</option>
                      </select>
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Session
                      </label>
                      <select name='session' id='session' autoComplete='on' className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                        <option value=" ">-- Select Session --</option>
                        <option value="Full">Full</option>
                        <option value="Off">Off</option>
                        <option value="One">One</option>
                        <option value="Online">Online</option>
                        <option value="Other">Other</option>
                        <option value="Two">Two</option>
                      </select>
                    </div>

                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Start Date
                      </label>
                      <input
                        type='date'
                        name='start_date'
                        id='start_date'
                        autoComplete='on'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        End Date
                      </label>
                      <input
                        type='date'
                        name='end_date'
                        id='end_date'
                        autoComplete='on'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-6'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Days
                      </label>
                      <input type="checkbox" id="sunday" name="sunday" value="U" />
                      <label for="sunday"> Sunday</label>
                      <input type="checkbox" id="monday" name="monday" value="M" />
                      <label for="monday"> Monday</label>
                      <input type="checkbox" id="tuesday" name="tuesday" value="T" />
                      <label for="tuesday"> Tuesday</label>
                      <input type="checkbox" id="wednesday" name="wednesday" value="W" />
                      <label for="wednesday"> Wednesday</label>
                      <input type="checkbox" id="thursday" name="thursday" value="R" />
                      <label for="thursday"> Thursday</label>
                      <input type="checkbox" id="friday" name="friday" value="F" />
                      <label for="friday"> Friday</label>
                      <input type="checkbox" id="saturday" name="saturday" value="S" />
                      <label for="saturday"> Saturday</label>
                    </div>

                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Start Time
                      </label>
                      <input
                        type='time'
                        name='start_time'
                        id='start_time'
                        autoComplete='on'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        End Time
                      </label>
                      <input
                        type='time'
                        name='end_time'
                        id='end_time'
                        autoComplete='on'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>


                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Room Type
                      </label>
                      <select name='meeting_room_type' id='meeting_room_type' autoComplete='on' className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                        <option value=" ">-- Select Room Type --</option>
                        <option value="Auditorium">Auditorium</option>
                        <option value="Classroom">Classroom</option>
                        <option value="Classroom - RESTRICTED">Classroom - RESTRICTED</option>
                        <option value="Conference Centre">Conference Centre</option>
                        <option value="eClassroom">eClassroom</option>
                        <option value="eClassroom - RESTRICTED">eClassroom - RESTRICTED</option>
                        <option value="Lab - Computer">Lab - Computer</option>
                        <option value="No Room Needed">No Room Needed</option>
                        <option value="Off campus">Off campus</option>
                        <option value="Online">Online</option>
                      </select>
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Room Preference
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Final Exam Information
              </h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Exam
                      </label>
                      <input type="radio" id="yes" name="exam" value="Y" />
                      <label for="yes">Yes</label>
                      <input type="radio" id="no" name="exam" value="N" />
                      <label for="no">No</label>
                      <input type="radio" id="undecided" name="exam" value="Undecided" />
                      <label for="undecided">Undecided</label>
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Exam Date and Time
                      </label>
                      <input
                        type='datetime-local'
                        name='exam_date_time'
                        id='exam_date_time'
                        autoComplete='on'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Room Type
                      </label>
                      <select name='exam_room_type' id='exam_room_type' autoComplete='on' className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'>
                        <option value=" ">-- Select Room Type --</option>
                        <option value="Auditorium">Auditorium</option>
                        <option value="Classroom">Classroom</option>
                        <option value="Classroom - RESTRICTED">Classroom - RESTRICTED</option>
                        <option value="Conference Centre">Conference Centre</option>
                        <option value="eClassroom">eClassroom</option>
                        <option value="eClassroom - RESTRICTED">eClassroom - RESTRICTED</option>
                        <option value="Lab - Computer">Lab - Computer</option>
                        <option value="No Room Needed">No Room Needed</option>
                        <option value="Off campus">Off campus</option>
                        <option value="Online">Online</option>
                      </select>
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Room Preference
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Class Size/Reserves
              </h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Class Size
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Reserved Seats
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Overflow
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Date reserves to be removed
                      </label>
                      <input type='date' name='remove_reserves_date' id='remove_reserves_date' autoComplete='on' className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Fee Information
              </h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Fee Detail Code
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Additional mandatory course fee
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-2'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Funding Source
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>

      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Miscellaneous
              </h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Banner codes
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Matrix code
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Crosslist code
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Link ID
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Zedcred
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Restrictions
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Additional Information
                    </label>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='mt-1 focus:ring-primary focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  >
                    Save
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

export default AddCourse;
