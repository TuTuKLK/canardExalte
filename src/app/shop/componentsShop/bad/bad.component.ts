import { TestcoService } from './../../../service/testco.service';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { APIlocalService } from 'src/app/services/apilocal.service';

@Component({
  selector: 'app-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent implements OnInit {
  public echantillon:any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];
  public IDRandomHero():number{
    return (Math.floor(Math.random() * 731)+1);
  }
  private _tempHero:string='';


  constructor(private _http:APIlocalService) { }
  public getAllBad(){
    this.echantillon.forEach(element => {
      let hero=''
      
      this._http.getHeroById(element).subscribe(res=>hero=res.name)
      
    });

  }




  ngOnInit(): void {


    public getAlBad(){
      this.echantillon.forEach(hero => {
        if (this._localApi.get(`${this._LocalURL}/${hero}`).subscribe(res=>`${res.biography.alignment}=='bad'`)){
          return this._localApi.get(`${this._LocalURL}/${hero}`)
        }
        
    //   });
    








  // this.echantillon.forEach(element => {
  //   this._testhttp.getHeroById(element).subscribe(res=>console.log(`${res.name} fait partie des ${res.biography.alignment=="good"?"Héros":"Vilains"}`));
  //   });

    // this._testhttp.getHero().subscribe(reponse=>console.log(reponse));


    // this._testhttp.getHeroesByName("batman").subscribe(reponse=>console.log(reponse));



    }
}
