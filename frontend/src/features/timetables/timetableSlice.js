import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import timetableService from './timetableService';

const initialState = {
  timetables: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new timetable
export const createTimetable = createAsyncThunk(
  'timetables/create',
  async (timetableData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await timetableService.createTimetable(timetableData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user timetables
export const getTimetables = createAsyncThunk(
  'timetables/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await timetableService.getTimetables(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user timetable
export const deleteTimetable = createAsyncThunk(
  'timetables/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await timetableService.deleteTimetable(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const timetableSlice = createSlice({
  name: 'timetable',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTimetable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTimetable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.timetables.push(action.payload);
      })
      .addCase(createTimetable.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTimetables.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTimetables.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.timetables = action.payload;
      })
      .addCase(getTimetables.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTimetable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTimetable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.timetables = state.timetables.filter(
          (timetable) => timetable._id !== action.payload.id
        );
      })
      .addCase(deleteTimetable.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = timetableSlice.actions;
export default timetableSlice.reducer;
