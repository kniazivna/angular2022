import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layouts";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies', loadChildren: () => import('./modules/movie/movie.module').then(value => value.MovieModule)},
      {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(value => value.AuthModule)},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRouringModule {
}
