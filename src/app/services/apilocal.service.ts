import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIlocalService {

  private get _LocalURL(): string {
    return 'http://localhost:3000/api';
  }
  public IDRandomHero(): number {
    return (Math.floor(Math.random() * 731) + 1);
  }

  constructor(private _localApi: HttpClient) { }

  public getRandomHero(): Observable<any> {
    return this._localApi.get(`${this._LocalURL}/${this.IDRandomHero()}`);
  }
  // public getRandomGoodHero(): Observable<any> {
  //   while (){ }
  //   return this._localApi.get(`${this._LocalURL}/${this.IDRandomHero()}`);
  // }
  public getOne(): Observable<any> {
    return this._localApi.get(`${this._LocalURL}`);
  }
  public getHeroById(id: number): Observable<any> {
    return this._localApi.get(`${this._LocalURL}/${id}`);
  }
}
