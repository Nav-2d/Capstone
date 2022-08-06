import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import timetableService from "./timetableService";

const initialState = {
  timetables: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new timetable
export const createTimetable = createAsyncThunk(
  "timetables/createTimetable",
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
  "timetables/editTimetable",
  async (timetableData, thunkAPI) => {
    try {
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
  "timetables/getTimetables",
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
  "timetables/getTimetable",
  async (timetableId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await timetableService.getTimetable(timetableId, token);
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
  "timetables/deleteTimetable",
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

// Copy user timetable
export const copyTimetable = createAsyncThunk(
  "timetables/copyTimetable",
  async (timetableId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const timetableData = thunkAPI
        .getState()
        .timetables.timetables.find(
          (timetable) => timetable._id === timetableId
        );
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

// Add course
export const addCourse = createAsyncThunk(
  "timetables/addCourse",
  async (courseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await timetableService.addCourse(courseData, token);
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

// Copy timetable course
export const copyCourse = createAsyncThunk(
  "timetables/copyCourse",
  async (data, thunkAPI) => {
    try {
      const { id, courseId } = data;
      const token = thunkAPI.getState().auth.user.token;
      const timetableData = thunkAPI
        .getState()
        .timetables.timetables.find((timetable) => timetable._id === id);
      let allCourses = timetableData.courses;
      let courseData = timetableData.courses.find(
        (course) => course._id === courseId
      );

      let newCourse = { ...courseData };

      delete newCourse._id;

      console.log(newCourse);
      let courses = allCourses.map(({ _id, ...rest }) => rest);

      courses.push(newCourse);
      console.log(courses);

      return await timetableService.addCourse({ courses, id }, token);
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
  name: "timetable",
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
      .addCase(editTimetable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTimetable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { _id, ...updatedTimetableData } = action.payload;
        let existingTimetable = state.timetables.find(
          (timetable) => timetable._id === _id
        );
        if (existingTimetable) {
          existingTimetable = { ...existingTimetable, updatedTimetableData };
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
      })
      .addCase(copyTimetable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(copyTimetable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.timetables.push(action.payload);
      })
      .addCase(copyTimetable.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // const { _id, ...updatedTimetableData  } = action.payload
        // let existingTimetable = state.timetables.find(timetable => timetable._id === _id)
        // if (existingTimetable) {
        //   existingTimetable = {...existingTimetable, updatedTimetableData}
        // }
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(copyCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(copyCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.message = action.payload;
      })
      .addCase(copyCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = timetableSlice.actions;
export default timetableSlice.reducer;

export const selectAllTimetables = (state) => state.timetables;

export const selectTimetableById = (state, timetableId) =>
  state.timetables.timetables.find(
    (timetable) => timetable._id === timetableId
  );
