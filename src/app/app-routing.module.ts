import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layouts";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'movies', loadChildren: () => import('./modules/movie/movie.module').then(value => value.MovieModule)},
      {path: 'login', loadChildren: () => import('./modules/login/login.module').then(value => value.LoginModule)},
      {path: 'registration', loadChildren: () => import('./modules/registration/registration.module').then(value => value.RegistrationModule)},
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
export class AppRoutingModule {
}
