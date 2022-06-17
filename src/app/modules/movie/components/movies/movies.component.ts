import {Component, OnInit} from '@angular/core';

import {MoviesService} from '../../services';
import {IMovie} from '../../interfaces';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  totalPages: number;
  currentPage: number = 1;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.moviesService.getAll(this.currentPage).subscribe(value => {
      this.movies = value.results;
      this.totalPages = 10000; //API віддає max 500 стор по 20 фільмів на сторінку
    })
  }

  change(event: number) {
        this.currentPage = event;
        this.getAll();
      }
    }
