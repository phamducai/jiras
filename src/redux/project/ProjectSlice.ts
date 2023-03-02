import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProjectState } from "model";
import { project } from "services/Project";
const initialState: ProjectState = {
  project: null,
};
export const projectAsync = createAsyncThunk(
  "project/all",
  async (thunkAPI) => {
    try {
      const result = await project.getAllproject();
      localStorage.setItem("token", result.data.content.accessToken);
      console.log(result);
      return result.data.content;
    } catch (error) {
      throw error;
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      projectAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.project = action.payload;
      }
    );
  },
});

export default projectSlice.reducer;
