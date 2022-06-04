import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class MivieService {

  constructor(private httpClient:HttpClient) { }

  getAll(page: number):Observable<any> {
    return this.httpClient.get<any>(`${urls.movie}page=${page}`)
  }
}

