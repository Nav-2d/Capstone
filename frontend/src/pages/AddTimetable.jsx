import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTimetable } from '../features/timetables/timetableSlice';

function AddTimetable() {
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
      <div className='max-w-sm mx-auto'>
        <div className='mb-6 text-center'>
          <h3 className='mb-4 text-2xl md:text-3xl font-bold'>Add Timetable</h3>
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
              required
              onChange={onChange}
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
              required
              onChange={onChange}
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

export default AddTimetable;
