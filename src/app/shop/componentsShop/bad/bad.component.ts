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

  // public getBad(res:any,idHero){
  //   this._testhttp.getHeroList().subscribe(res=>console.log(res.alignment));

  //   if res.biography.alignment=="bad"
  // }


  constructor(private _testhttp:TestcoService) { }

  ngOnInit(): void {
  //   this.echantillon.forEach(element => {
  //     this._testhttp.getHeroById(element).subscribe(res=>console.log(`${res.biography.alignment=="bad"}`?`${res.name} fait partie des Vilains`:"BlaBla"));
  //     });
  // }
  this.echantillon.forEach(element => {
    this._testhttp.getHeroById(element).subscribe(res=>console.log(`${res.name} fait partie des ${res.biography.alignment=="good"?"Héros":"Vilains"}`));
    });

    }
}
