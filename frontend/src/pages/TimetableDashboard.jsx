import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const API_HOST = "http://localhost:5000";
const TIMETABLES_API_URL = `${API_HOST}/api/timetables`;

function TimetableDashboard() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const fetchTimetables = () => {
    fetch(`${TIMETABLES_API_URL}`)
      .then(res => res.json())
      .then(json => setData(json));
  }

  useEffect(() => {
    fetchTimetables();
  }, []);

  const edit = () => {
    console.log('edit');
  }

  const addTimetable = () => {
    console.log('add');
    navigate('/addtimetable');
  }

  const deleteTimetable = () => {
    console.log('delete');
  }

  const copy = () => {
    console.log('copy');
  }
  const exportCSV = () => {
    console.log('export');
  }

  return (
    <div className="container">
      <h1>Timetable Dashboard</h1>
      <button onClick={addTimetable}>Add</button>
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
          <tr>
            <td>INFO</td>
            <td>202010</td>
            <td>01-Jan-2022</td>
            <td>
              <div class="dropdown">
                <button><span>&#8942;</span></button>
                <div class="dropdown-content">
                  <p onClick={edit}>Edit</p>
                  <p onClick={deleteTimetable}>Delete</p>
                  <p onClick={copy}>Copy</p>
                  <p onClick={exportCSV}>Export to CSV</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TimetableDashboard;