import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTimetables, addCourse, selectAllTimetables, selectTimetableById } from '../features/timetables/timetableSlice';
import { useParams } from 'react-router-dom';

function CoursesDashboard() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let courses = [];
  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, message } = useSelector(
    selectAllTimetables
  );

  const timetable = useSelector(state => selectTimetableById(state, params.timetableId))

  async function handleDelete(timetableId, courseId) {
    courses = timetable.courses.filter(course => course._id !== courseId);
    await dispatch(addCourse({ courses, id: params.timetableId }));
    dispatch(getTimetables());
    navigate(`/timetable-dashboard/${timetable._id}`);
    // navigate('/timetable-dashboard');
  }

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/');
    };

    dispatch(getTimetables());

  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <section className='container mx-auto pt-20 bg-white'>
      <div>
        <div className='text-primary font-medium text-sm  text-center inline-flex items-center'>
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
            <Link to='/timetable-dashboard'>Back to Timetable Dashboard</Link>
          </div>
        </div>
      </div>
      <div className='px-4'>
        <div className='flex justify-between items-center'>
          <div className='font-extrabold'>
            <h1 className='text-3xl md:text-4xl  font-heading mt-3 mb-4'>
              Courses Dashboard
            </h1>
            <span className='text-lg text-primary'>View or add courses</span>
          </div>
          <div>
            <Link
              to={`/timetable-dashboard/${timetable._id}/add-course`}
              className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            >
              <svg
                className='-ml-1 mr-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <p>Add</p>
            </Link>
          </div>
        </div>
        <div className='max-w-lg pt-10'>
          <div className='flex flex-wrap -mx-2 justify-center'>
            <div className='flex-grow w-full md:w-auto px-2 mb-2'>
              <input
                className='inline-block w-full p-4 text-lg font-bold placeholder-gray-500 shadow border-2 border-primary rounded outline-none'
                type='email'
                placeholder='Search for courses'
              />
            </div>
            <div className='w-full md:w-auto px-2 mb-2'>
              <a
                className='inline-flex items-center justify-center w-full md:w-auto h-full py-4 px-5 text-center leading-6 text-lg text-white font-extrabold bg-primary hover:bg-primary border-3 border-primary rounded transition duration-200'
                href='/'
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 flex w-1/4 justify-between">
        <div className=''>
          <h3 className="mt-6 text-sm text-gray-500">
            Subject
          </h3>
          <p className="text-base font-semibold text-gray-900">{timetable.subject}</p>
        </div>
        <div className=''>
          <h3 className="mt-6 text-sm text-gray-500">
            Term Code
          </h3>
          <p className="text-base font-semibold text-gray-900">{timetable.term_code}</p>
        </div>
      </div>
      <div className='relative rounded-xl overflow-auto pt-10'>
        <div className='shadow-sm overflow-hidden my-8'>
          <table className='border-collapse table-auto w-full text-sm'>
            <thead className='bg-white py-12'>
              <tr>
                <th className='border-b font-medium p-4 pr-8 pt-0 pb-3 text-primary text-left'>
                  CRN
                </th>
                <th className='border-b font-medium p-4 pr-8 pt-0 pb-3 text-primary text-left'>
                  Course Num
                </th>
                <th className='border-b font-medium p-4 pr-8 pt-0 pb-3 text-primary text-left'>
                  Section
                </th>
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
              </tr>
            </thead>
            <tbody className='bg-white'>
                {timetable.courses.map((course, key) => {
                  return (
                    <tr key={key}>
                      <td className='border-b border-slate-100  p-4 pl-8 text-black '>
                        {course.crn}
                      </td>
                      <td className='border-b border-slate-100  p-4 pl-8 text-black '>
                        {course.course_number}
                      </td>
                      <td className='border-b border-slate-100  p-4 pl-8 text-black '>
                        {course.section}
                      </td>
                      <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to={`/timetable-dashboard/${timetable._id}/edit-course/${course._id}`}>
                        <span>Edit</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to={`/timetable-dashboard/${timetable._id}/view-course/${course._id}`}>
                        <span>View</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <button onClick={() => handleDelete(timetable._id, course._id)}>
                        Delete
                      </button>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/course-dashboard'>
                        <span>Copy</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/course-dashboard'>
                        <span>Export CSV</span>
                      </Link>
                    </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CoursesDashboard;
