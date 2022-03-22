import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { reset, getTimetables } from '../features/timetables/timetableSlice';

// import TimetableForm from '../components/TimetableForm';
// import TimetableItem from '../components/TimetableItem';

// const API_HOST = 'http://localhost:5000';
// const TIMETABLES_API_URL = `${API_HOST}/api/timetables`;

const data = [
  { name: 'Anom', age: 19, gender: 'Male' },
  { name: 'Megha', age: 19, gender: 'Female' },
  { name: 'Subham', age: 25, gender: 'Male' },
];

function TimetableDashboard() {
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

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Term Code</th>
            <th>Created On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {timetables.map((timetable, key) => {
            return (
              <tr key={key}>
                <td>{timetable.subject}</td>
                <td>{timetable.term_code}</td>
                <td>{new Date(timetable.createdAt).toLocaleString('en-US')}</td>
                <td>
                  <div class='dropdown'>
                    <button>
                      <span>&#8942;</span>
                    </button>
                    <div class='dropdown-content'>
                      <p onClick={edit}>Edit</p>
                      <p onClick={view}>View</p>
                      <p onClick={deleteTimetable}>Delete</p>
                      <p onClick={copy}>Copy</p>
                      <p onClick={exportCSV}>Export to CSV</p>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <section className='content'>
        {timetables.length > 0 ? (
          <div className='goals'>
            {timetables.map((timetable) => (
              
            ))}
          </div>
        ) : (
          <h3>You have not set any goals </h3>
        )}
      </section> */}
    </>
  );
}

export default TimetableDashboard;
