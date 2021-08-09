import { APIService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { TestcoService } from './../../../service/testco.service';
import { APIlocalService } from 'src/app/services/apilocal.service';


@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  public echantillon: any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];

  public Heroes: any[] = [];
  public testHTML: any;
  public good: any;

  constructor(private _api: APIlocalService) { }

  public getOneGood() {
    this._api.getRandomHero().subscribe(res => this.good = res);
    while (this.good.biography.alignment !== "good") {
      this._api.getRandomHero().subscribe(res => this.good = res);
    }
    return this.good;
    //  ne marche pas: renvoit aléatoirement un hero good ou bad
  }

  ngOnInit(): void {
    this._api.getRandomHero().subscribe(res => this.testHTML = res);


    for (const id of this.echantillon) {
      this._api.getHeroById(id).subscribe((h) => this.Heroes.push(h));
    }

    this.getOneGood();




    // for (const i of this.echantillon) {
    //   this._api.getOne(i).subscribe((h)=>this.Heroes.push(h));
    // }
    // constructor(private _testhttp:TestcoService) { }

    // ngOnInit(): void {
    //   this.echantillon.forEach(element => {
    //   this._testhttp.getHeroById(element).subscribe(res=>console.log(`${res.name} fait partie des ${res.biography.alignment=="good"?"Héros":"Vilains"}`));
    //   });


    // this.echantillon.forEach(element => {
    //   this._testhttp.getHeroById(element).subscribe(res=>console.log(`${res.biography.alignment=="good"}`?`${res.name} fait partie des Héros`:null));
    //   });
  }

}
