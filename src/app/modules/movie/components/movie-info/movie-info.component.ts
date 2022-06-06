import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {MoviesService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movieInfo: IMovie;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(({id}) => {
     let state = this.router.getCurrentNavigation()?.extras?.state?.['movie'] as IMovie;

      if(state){
        return this.movieInfo = state;
      }

      return this.moviesService.getById(id).subscribe(value => this.movieInfo = value);
     })
  }

}
