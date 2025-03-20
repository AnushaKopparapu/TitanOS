import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch items from the API
export const fetchItems = createAsyncThunk('list/fetchItems', async () => {
  const response = await axios.get(
    'https://acc01.titanos.tv/v1/genres/14/contents?market=es&device=tv&locale=es&page=1&per_page=50'
  );
  return response.data.collection;
});

// Initial state for the list
const initialState = {
  items: [],
  focusedIndex: 0,
};

// Redux slice
const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setFocus: (state, action) => {
      state.focusedIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { setFocus } = listSlice.actions;
export default listSlice.reducer;
