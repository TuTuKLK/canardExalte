import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIlocalService {
//! NE pas Toucher liens vers le local********
  private get _LocalURL() :string {
    return 'http//localhost:3000/api';  }
//! ************************************

public echantillon:any[] = [
  69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
];



  public IDRandomHero():number{
    return (Math.floor(Math.random() * 731)+1);
  }

  constructor(private _localApi : HttpClient) { }

  public getOne():Observable<any>{
    return this._localApi.get(`${this._LocalURL}/`);
  }
  public getHeroById(id:number): Observable<any>{
    return this._localApi.get(`${this._LocalURL}/${id}`);
  }
  // public getRandomHero():Observable<any>{
  //   return this._localApi.get(`${this._LocalURL}/${this.IDRandomHero}`);
  // }
}
