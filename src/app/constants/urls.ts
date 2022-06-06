import {environment} from "../../environments/environment";

const {API, API_KEY} = environment;

export const urls = {
  movies: `${API}/discover/movie?api_key=${API_KEY}&page=`,
  genres: `${API}/genre/movie/list?api_key=${API_KEY}`,
  movieById: `${API}/movie`
 // movieById: `${API}/movie/${movie_id}?api_key=${API_KEY}`
}
