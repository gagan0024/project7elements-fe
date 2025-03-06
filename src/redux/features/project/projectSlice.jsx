import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scale: "",
  storeys: 0,
  building_height: 0,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    SetScale: (state, action) => {
      state.scale = action.payload;
      localStorage.setItem("scale", JSON.stringify(action.payload));
    },
    SetBuildingHeight: (state, action) => {
      state.building_height = action.payload;
      localStorage.setItem("building_height", JSON.stringify(action.payload));
    },
    SetStoreys: (state, action) => {
      state.storeys = action.payload;
      localStorage.setItem("storeys", JSON.stringify(action.payload));
    },
  },
});

// Export actions
export const { SetScale, SetBuildingHeight, SetStoreys } = projectSlice.actions;

// Export reducer
export default projectSlice.reducer;
