import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSuperheroesService {

  getheroId: any = {};

  constructor(private _http: HttpClient) { }
  getHeroes(name: string): Observable<any> {
    return this._http.get(`https://superheroapi.com/api/4129752977043839/search/${name}`);
  }

}
