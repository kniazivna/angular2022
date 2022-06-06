import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { MovieRoutingModule } from './movie-routing.module';
import {MoviesService} from './services';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieInfoComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    MoviesService
  ]
})
export class MovieModule { }
