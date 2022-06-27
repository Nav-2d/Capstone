import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTimetables, selectTimetableById, editTimetable } from '../features/timetables/timetableSlice';

function EditTimetable() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, message } = useSelector(
    selectAllTimetables
  );

  const timetable = useSelector(state => selectTimetableById(state, params.timetableId))

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/');
    };

  }, [user, navigate, isError, message]);

  const [formData, setFormData] = useState({
    subject: timetable.subject,
    term_code: timetable.term_code,
  });

  const { subject, term_code } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    await dispatch(editTimetable({ ...formData, id: params.timetableId }));
    navigate('/timetable-dashboard');
  };

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <section className='container mx-auto pt-20'>
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
      <div className='max-w-md mx-auto p-10 shadow-lg'>
        <div className='mb-6 text-center'>
          <h3 className='mb-4 text-2xl md:text-3xl font-bold'>Edit Timetable</h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className='mb-6'>
            <label htmlFor='term_code' className='text-md'>
              Term Code
            </label>
            <input
              type='text'
              name='term_code'
              id='term_code'
              value={term_code}
              onChange={onChange}
              required
              className='appearance-none block w-full px-3 py-2 mb-4 focus:outline-none focus:ring-primary focus:border-primary border border-gray-300 rounded-md'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-md'>
              Subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              value={subject}
              onChange={onChange}
              required
              className='appearance-none block w-full px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary border border-gray-300 rounded-md '
            />
          </div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditTimetable;
