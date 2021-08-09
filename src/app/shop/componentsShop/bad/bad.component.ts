import { TestcoService } from './../../../service/testco.service';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent implements OnInit {
  public echantillon:any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];
  public nameHero:string = 'buffy';

  public hero = '';
  public align = '';



  constructor(private _testhttp:TestcoService) { }
  public getAllBad(element:number){
    let align=''
    this._testhttp.getHeroById(element).subscribe(res=>align=res.biograhpy.alignment)
    console.log(this._testhttp.getHeroById(element).subscribe(res=>res.name))
    if(align=='bad')
    return console.log(this._testhttp.getHeroById(element).subscribe(res=>res.name))    
  }

  ngOnInit(): void {
  this.echantillon.forEach(element => {
    this._testhttp.getHeroById(element).subscribe(res=>`${this.align=res.biography.alignment}${this.hero=res.name}`);
    // this._testhttp.getHeroById(element).subscribe(res=>this.hero=res.name);
    if(this.align==='bad'){
      console.log(this.hero)
    }
    
      // `${res.biography.alignment=="good"}`?console.log(res.name):undefined);
  });

  this._testhttp.getHero().subscribe(reponse=>console.log(reponse));
  // this._testhttp.getHeroesByName("batman").subscribe(reponse=>console.log(reponse));
  
  // this._testhttp.echantillon.forEach(element => {
  //   this.getAllBad(element)
  // });

    }
}
