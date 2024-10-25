import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById } from './operations';

const initialState = {
  items: [],
  itemById: {},
  isLoading: false,
  isError: null,
  page: 1,
  limit: 4,
  totalItems: null,
  hasNextPage: false,
};

const calculateHasNextPage = state => {
  const totalPages = Math.ceil(state.totalItems / state.limit);
  state.hasNextPage = state.page < totalPages;
};

const handlePending = state => {
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
  reducers: {
    resetPage(state) {
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.items;
        state.totalItems = payload.total;
        calculateHasNextPage(state);
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

export const { resetPage, incrementPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
