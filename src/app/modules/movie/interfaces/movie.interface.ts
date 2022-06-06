import {IGenre} from "./genre.interface";

export interface IMovie {
  id: number;
  genre_ids: number[];
  original_title: string;
  poster_path: string;
  popularity: number;
  adult: boolean
  backdrop_path: string;
  original_language: string;
  overview: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  ote_count: number;
  genres?: IGenre[];
}

