import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { reset, getTimetables } from '../features/timetables/timetableSlice';

function CoursesDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { timetables, isLoading, isError, message } = useSelector(
    (state) => state.timetables
  );

  const edit = () => {
    console.log('edit');
  };

  const view = () => {
    navigate('/courses');
  };

  const addTimetable = () => {
    navigate('/addtimetable');
  };

  const deleteTimetable = () => {
    console.log('delete');
  };

  const copy = () => {
    console.log('copy');
  };
  const exportCSV = () => {
    console.log('export');
  };
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/');
    }
    dispatch(getTimetables());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <section className='container mx-auto pt-20 bg-white'>
      <div>
        <div class='text-primary font-medium text-sm  text-center inline-flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
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
          <Link to='/timetable-dashboard'>Back to Timetable Dashboard</Link>
        </div>
      </div>
      <div className='px-4'>
        <div className='text-left'>
          <h1 className='text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-4'>
            Courses Dashboard
          </h1>
          <span className='text-lg font-extrabold text-primary'>
            View or add courses
          </span>
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
      <div className='relative rounded-xl overflow-auto pt-10'>
        <div className='shadow-sm overflow-hidden my-8'>
          <table className='border-collapse table-auto w-full text-sm'>
            <thead className='bg-white py-12'>
              <tr>
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left'>
                  Subject
                </th>
                <th className='border-b font-medium p-4 pt-0 pb-3 text-primary text-left'>
                  Term Code
                </th>
                <th className='border-b font-medium p-4 pr-8 pt-0 pb-3 text-primary text-left'>
                  Created On
                </th>
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
                <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-primary  text-left' />
              </tr>
            </thead>
            <tbody className='bg-white'>
              {timetables.map((timetable, key) => {
                return (
                  <tr key={key}>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black '>
                      {timetable.subject}
                    </td>
                    <td className='border-b border-slate-100  p-4 text-black '>
                      {timetable.term_code}
                    </td>
                    <td className='border-b border-slate-100  p-4 pr-8 text-black'>
                      {moment(timetable.createdAt).format('DD-MMM-YYYY')}
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/courses'>
                        <span>Edit</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/courses'>
                        <span>View</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/courses'>
                        <span>Delete</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/courses'>
                        <span>Copy</span>
                      </Link>
                    </td>
                    <td className='border-b border-slate-100  p-4 pl-8 text-black'>
                      <Link to='/courses'>
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
