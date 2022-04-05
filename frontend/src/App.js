import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import CoursesDashboard from './pages/CoursesDashboard';
import Login from './pages/Login';
import TimetableDashboard from './pages/TimetableDashboard';
import AddTimetable from './pages/AddTimetable';
import AddCourse from './pages/AddCourse';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route
            path='/timetable-dashboard'
            element={<TimetableDashboard />}
          ></Route>
          <Route path='/add-timetable' element={<AddTimetable />}></Route>
          <Route
            path='/course-dashboard'
            element={<CoursesDashboard />}
          ></Route>
          <Route path='/add-course' element={<AddCourse />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
