import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Project, projects } from "model";

import { project } from "services/Project";

interface category {
  id: number;
  projectCategoryName: string;
}

export interface ProjectState {
  project: Project[] | null;
  ProjectCategory: category[] | null;
}
const initialState: ProjectState = {
  project: null,
  ProjectCategory: null,
};
export const projectAsync = createAsyncThunk(
  "project/all",
  async (thunkAPI) => {
    try {
      const result = await project.getAllproject();

      console.log(result);
      return result.data.content;
    } catch (error) {
      throw error;
    }
  }
);

export const projectcatagoryAsync = createAsyncThunk(
  "project/catagory",
  async (thunkAPI) => {
    try {
      const result = await project.getcategory();

      return result.data.content;
    } catch (error) {
      throw error;
    }
  }
);

export const CreateProjectAsync = createAsyncThunk(
  "project",
  async (data: projects, thunkAPI) => {
    try {
      const result = await project.taoproject(data);

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
    builder
      .addCase(projectAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.project = action.payload;
      })
      .addCase(
        projectcatagoryAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.ProjectCategory = action.payload;
        }
      );
  },
});

export default projectSlice.reducer;
