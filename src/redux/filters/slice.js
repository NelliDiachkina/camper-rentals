import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  equipment: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
  form: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilters: (state, { payload }) => {
      const { name, checked } = payload;
      state.equipment[name] = checked;
    },
    setForm: (state, { payload }) => {
      state.form = payload;
    },
  },
});

export const { toggleFilters, setForm } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
