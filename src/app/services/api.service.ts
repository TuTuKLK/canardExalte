import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  // public Batman:Url = "https://www.superheroapi.com/api.php/10159385542572346/69"

  public id:Number = 69;

  public echantillon:any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];

  private _url : string = "https://www.superheroapi.com/api.php/10159385542572346/"+this.id
  
  constructor(private _http: HttpClient) {}

  // public getAll():Observable<void> {
  // this.echantillon.forEach(guys=>console.log(guys))
    
  // }

  // foreach x in echantillon{
  //   console.log("https://www.superheroapi.com/api.php/10159385542572346/"+x)
  // }

  // private get _basic_url(): string {
//     return ${this._url}${this._token}/;
//   }


//   public getAllSuperHeroes():Observable<Iprofile[]> {
//     return this._http.get<Iprofile[]>(this._basic_url);
//   }

//   public getOneSuperHeroesByID(id:number):Observable<Iprofile> {
//     return this._http.get<Iprofile>(this._basic_url+id);
//   }

//   public getSuperHeroesByName(name:string):Observable<Iprofile[]> {
//     return this._http.get<Iprofile[]>(this._basic_url+'search/'+name);
//   }

//   export interface Iprofile {
//     id : number ;
//     name : string ;
//     powerstats? : any ;
//     appearence? : any ;
//     gender? : string;
// }

}
