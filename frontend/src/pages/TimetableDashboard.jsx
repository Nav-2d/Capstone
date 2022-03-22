import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { reset, getTimetables } from '../features/timetables/timetableSlice';

import TimetableForm from '../components/TimetableForm';
import TimetableItem from '../components/TimetableItem';

function TimetableDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { timetables, isLoading, isError, message } = useSelector(
    (state) => state.timetables
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
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
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Timetable Dashboard</p>
      </section>

      <TimetableForm />

      <section className='content'>
        {timetables.length > 0 ? (
          <div className='goals'>
            {timetables.map((timetable) => (
              <TimetableItem key={timetable._id} timetable={timetable} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals </h3>
        )}
      </section>
    </>
  );
}
export default TimetableDashboard;
