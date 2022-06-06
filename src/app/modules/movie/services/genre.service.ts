import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IResponse} from "../interfaces";
import {urls} from "../../../constants";
import {IGenreResponse} from "../interfaces/genreResponse.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor( private httpClient:HttpClient) { }

  getAll(): Observable<IGenreResponse> {
    return this.httpClient.get<IGenreResponse>(urls.genres);
  }
}
