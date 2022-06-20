import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MoviesComponent} from "./components/movies/movies.component";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";


const routes: Routes = [
  {path: "", component: MoviesComponent},
  {path: ":id", component: MovieInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
