import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, { payload }) => {
      console.log(payload);
      return payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
