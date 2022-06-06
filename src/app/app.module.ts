import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {AppRouringModule} from './app-rouring.module';
import {HeaderComponent} from './components';
import {FooterComponent} from './components';
import {LayoutComponent} from './layouts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouringModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
