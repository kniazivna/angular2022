
import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {IGenre} from "../../interfaces/genre.interface";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  genres: IGenre[]

  @Input()
  movie: IMovie;

  constructor() { }

  ngOnInit(): void {
  }


}
