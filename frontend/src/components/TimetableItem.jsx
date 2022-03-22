import { useDispatch } from 'react-redux';
import { deleteTimetable } from '../features/timetables/timetableSlice';

function TimetableItem({ timetable }) {
  const dispatch = useDispatch();
  return (
    <div className='goal'>
      <div>{new Date(timetable.createdAt).toLocaleString('en-US')}</div>
      <h2>{timetable.term_code}</h2>
      <h2>{timetable.subject}</h2>
      <button
        onClick={() => dispatch(deleteTimetable(timetable._id))}
        className='close'
      >
        X
      </button>
    </div>
  );
}
export default TimetableItem;
