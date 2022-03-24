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
            path='/timetabledashboard'
            element={<TimetableDashboard />}
          ></Route>
          <Route path='/courses' element={<CoursesDashboard />}></Route>
          <Route path='/addtimetable' element={<AddTimetable />}></Route>
          <Route path='/addcourse' element={<AddCourse />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
