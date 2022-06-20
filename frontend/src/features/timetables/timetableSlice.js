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
  'timetables/createTimetable',
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

// Edit timetable
export const editTimetable = createAsyncThunk(
  'timetables/editTimetable',
  async (timetableData, thunkAPI) => {
    try {
      console.log(timetableData);
      const token = thunkAPI.getState().auth.user.token;
      return await timetableService.editTimetable(timetableData, token);
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
  'timetables/getTimetables',
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

// Get timetable by ID
export const getTimetable = createAsyncThunk(
  'timetables/getTimetable',
  async (timetableData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await timetableService.getTimetable(timetableData, token);
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
  'timetables/deleteTimetable',
  async (timetableId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await timetableService.deleteTimetable(timetableId, token);
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
    // reset: (state) => initialState,
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
      .addCase(editTimetable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTimetable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action.payload)
        // const { _id, ...updatedTimetableData  } = action.payload
        const { _id, subject, term_code  } = action.payload
        const existingTimetable = state.timetables.find(timetable => timetable._id === _id)
        // existingTimetable = {...existingTimetable, updatedTimetableData}
        if (existingTimetable) {
          existingTimetable.subject = subject
          existingTimetable.term_code = term_code
        }
      })
      .addCase(editTimetable.rejected, (state, action) => {
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
          (timetable) => timetable._id !== action.payload._id
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

export const selectAllTimetables = state => state.timetables

export const selectTimetableById = (state, timetableId) =>
  state.timetables.timetables.find(timetable => timetable._id === timetableId)