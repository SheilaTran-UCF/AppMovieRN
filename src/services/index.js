// get list movies tu server ve su dung fetch
const getListMovies = () => {
  // fetch can URL, method
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=c0d41ba4fd2c7ba8c6252c0e08ea89b5&language=en-US&page=1`,
    {
      method: 'GET',
      // header thi server nao cx giong nhau, co khac thi server se bao minh
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};
// get detail info movies tu server ve su dung fetch
const getDetailMovie = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=c0d41ba4fd2c7ba8c6252c0e08ea89b5&language=en-US`,
    {
      method: 'GET',
      // header thi server nao cx giong nhau, co khac thi server se bao minh
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
};

export {getListMovies, getDetailMovie};
