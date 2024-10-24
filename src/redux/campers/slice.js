import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById } from './operations';

const initialState = {
  items: [],
  itemById: {},
  isLoading: false,
  isError: null,
};

const handlePending = state => {
  state.items = [];
  state.isError = null;
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.items;
      })
      .addCase(getAllCampers.rejected, handleRejected)
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.itemById = payload;
      })
      .addCase(getCamperById.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
