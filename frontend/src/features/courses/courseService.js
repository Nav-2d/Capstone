import axios from 'axios';

const API_URL = '/api/courses/';

// Create new course
const createCourse = async (timetableData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, timetableData, config);

  return response.data;
};

// Create course by ID
const getCourse = async (timetableData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + timetableData, config);
  console.log(response.data);
  return response.data;
};

// Get user courses
const getCourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user timetable
const deleteCourse = async (timetableId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + timetableId, config);

  return response.data;
};

const courseService = {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
};

export default courseService;
