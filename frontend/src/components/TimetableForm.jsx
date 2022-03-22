import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTimetable } from '../features/timetables/timetableSlice';

function TimetableForm() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTimetable({ text }));
    setText('');
  };

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Timetable</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Timetable
          </button>
        </div>
      </form>
    </section>
  );
}
export default TimetableForm;
