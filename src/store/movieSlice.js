import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getListMovies} from '../services';

const initialState = {
  movies: [],
};

const getListMovieAsynTHunk = createAsyncThunk('listmovie', async () => {
  const resMovies = await getListMovies();
  return resMovies;
});

const movieSlice = createSlice({
  name: 'MOVIE_SLICE',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getListMovieAsynTHunk.pending, (state, action) => {});
    builder.addCase(getListMovieAsynTHunk.fulfilled, (state, action) => {});
    builder.addCase(getListMovieAsynTHunk.rejected, (state, action) => {});
  },
});

const {reducer, actions} = movieSlice;

export default reducer;
