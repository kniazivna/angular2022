import {environment} from "../../environments/environment";

const {API, API_KEY} = environment;

export const urls = {
  movies: `${API}/discover/movie?api_key=${API_KEY}`,
  genres: `${API}/genre/movie/list?api_key=${API_KEY}`,
  movieById: `${API}/movie`,
}
