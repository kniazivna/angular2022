import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  // {
  //   path: '', component: MainLayoutComponent, children: [
  //     {path: '', redirectTo: 'users', pathMatch: 'full'},
  //     {path: 'users', loadChildren: () => import('./modules').then(value => value.UserModule)},
  //     {path: 'posts', loadChildren: () => import('./modules').then(value => value.PostModule)},
  //     {path: 'comments', loadChildren: () => import('./modules').then(value => value.CommentModule)},
  //   ]
  // }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRouringModule { }
