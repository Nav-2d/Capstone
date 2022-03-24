import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import timetableReducer from '../features/timetables/timetableSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timetables: timetableReducer,
  },
});
