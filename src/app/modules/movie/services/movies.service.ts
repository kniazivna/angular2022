import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {urls} from '../../../constants';
import {IResponse} from "../interfaces";
import {environment} from "../../../../environments/environment";

const {API_KEY} = environment;

@Injectable({
  providedIn: 'root'
})

export class MoviesService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<IResponse> {
    return this.httpClient.get<IResponse>(urls.movies + `&page=${page}`);
  }
getById(id:number): Observable<any>{
  return this.httpClient.get<any>(urls.movieById + `/${id}`+`?api_key=${API_KEY}` );

}

}

