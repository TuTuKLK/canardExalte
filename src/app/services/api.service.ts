import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  // public Batman:Url = "https://www.superheroapi.com/api.php/10159385542572346/69"


  private _url : string = "https://www.superheroapi.com/api/10159385542572346/";
  
  constructor(private _http: HttpClient) {}

  public getOne(id:number):Observable<any> {
    return this._http.get<any>(this._url+id);
  }

  // foreach x in echantillon{
  //   console.log("https://www.superheroapi.com/api.php/10159385542572346/"+x)
  // }

}
