import axios from 'axios';

const API_URL = '/api/sample/';

// Create new timetable
const createTimetable = async (timetableData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, timetableData, config);
  return response.data;
};

// Edit timetable
const editTimetable = async (timetableData, token) => {
  const { id, ...updatedTimetableData } = timetableData;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.patch(API_URL + id, updatedTimetableData, config);
  console.log(response.data)
  return response.data;
};

// Create timetable by ID
const getTimetable = async (timetableData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + timetableData, config);
  return response.data;
};

// Get user timetables
const getTimetables = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

// Delete user timetable
const deleteTimetable = async (timetableId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + timetableId, config);
  return response.data;
};

const timetableService = {
  createTimetable,
  editTimetable,
  getTimetables,
  getTimetable,
  deleteTimetable,
};

export default timetableService;
