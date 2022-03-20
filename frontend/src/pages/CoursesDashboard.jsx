import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const API_HOST = "http://localhost:5000";
const COURSES_API_URL = `${API_HOST}/api/courses`;

function CoursesDashboard() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const fetchTimetables = () => {
    fetch(`${COURSES_API_URL}`)
      .then(res => res.json())
      .then(json => setData(json));
  }

  useEffect(() => {
    fetchTimetables();
  }, []);

  const edit = () => {
    console.log('edit');
  }

  const addCourse = () => {
    console.log('add');
    navigate('/addcourse');
  }

  const deleteTimetable = () => {
    console.log('delete');
  }

  const copy = () => {
    console.log('copy');
  }

  return (
    <div className="container">
      <h1>Course Dashboard</h1>
      <h2>Subject and Term</h2>
      <button onClick={addCourse}>Add a new Course</button>
      <table>
        <thead>
          <tr>
            <th>CRN</th>
            <th>Course Number</th>
            <th>Section</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>21109</td>
            <td>1111</td>
            <td>S10</td>
            <td>
              <div class="dropdown">
                <button><span>&#8942;</span></button>
                <div class="dropdown-content">
                  <p onClick={edit}>Edit</p>
                  <p onClick={deleteTimetable}>Delete</p>
                  <p onClick={copy}>Copy</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CoursesDashboard;