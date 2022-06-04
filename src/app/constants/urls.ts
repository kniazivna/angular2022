import {environment} from "../../environments/environment";

const {API, API_KEY} = environment;

export const urls = {
  movie: `${API}/discover/movie?api_key=${API_KEY}`,
  genre: `${API}/genre/movie/list?api_key=${API_KEY}`,
}
