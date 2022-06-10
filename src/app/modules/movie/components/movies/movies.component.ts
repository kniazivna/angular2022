import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {GenreService, MoviesService} from '../../services';
import {IMovie} from '../../interfaces';
import {IGenre} from "../../interfaces/genre.interface";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input()
  genre: IGenre;

  movies: IMovie[];
  genres: IGenre[];
  totalPages: number;
  currentPage: number = 1;


  constructor(private moviesService: MoviesService, private  genreService:GenreService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getByGenre()

  }

  getAll(){
    this.moviesService.getAll(this.currentPage).subscribe(value => {
      this.movies = value.results;
      this.totalPages = 10000; //API віддає max 500 стор по 20 фільмів на сторінку
    })
  }

  getByGenre(){
    this.genreService.getAll().subscribe(value => this.genres = value.genres);
  }

  change(event: number) {
    this.currentPage = event;
    this.getAll();
  }
}
