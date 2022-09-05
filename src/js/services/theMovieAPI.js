import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '886a5e80a67d15e1eb52e12b03d8c581';

export default class TheMovieAPI {
  #query = '';
  #queryParams = {
    params: {
      api_key: API_KEY,
    },
  };
  // запит на трендові фільми, це основна сторінка
  async fetchMovies(page) {
    const { data } = await axios.get(
      `/trending/movie/day?page=${page}`,
      this.#queryParams
    );
    return data;
  }
  // запит по ключовому слову
  async fetchSearchMovies(page) {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&page=${page}&query=${this.#query}`
    );
    return data;
  }
  // запит на пошук фільму для модалкі по id
  async fetchDetails(id) {
    const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

    return data;
  }
  // запит по жанрам
  async fetchGenres() {
    const res = await axios.get(`/genre/movie/list?`, {
      params: { api_key: API_KEY },
    });

    const genres = res.data.genres.reduce((acc, genre) => {
      return {
        ...acc,
        [genre.id]: genre.name,
      };
    }, {});
    localStorage.setItem('genres', JSON.stringify(genres));
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}