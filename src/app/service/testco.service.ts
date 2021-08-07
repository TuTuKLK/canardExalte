import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestcoService {
  
  private token : string = '10159385542572346';
  public id : number = 372;
  public idRandom(){
    // return Math.floor(Math.random() * (731 - min + 1)) + min;
    return (Math.floor(Math.random() * 731)+1);
  }
  
  

  constructor(private _http: HttpClient) { }
  public getHero(): Observable<any>{
    return this._http.get(`https://www.superheroapi.com/api.php/${this.token}/${this.idRandom()}`);
  }
}
