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
  public full: any[] = [];

  public Heroes: any[] = [];
  public testHTML: any;
  public good: any;

  private _remplir() {
    for (let x = 1; x < 732; x++) {
      this.full.push(x)
    }
  }
  constructor(private _api: APIlocalService) { }

  // ? afficher un gentil aéatoire en prenant en compte l'asynchrone 
  // public getOneGood() {
  //   this._api.getRandomHero().subscribe(res => {
  //     this.good = res;
  //     let notFound = this.good.biography.alignment !== "good";
  //     let searching = false;
  //     while (notFound) {
  //       if (!searching) {
  //         this._api.getRandomHero().subscribe(res => {
  //           this.good = res;
  //           searching = false;
  //           notFound = this.good.biography.alignment !== "good";
  //         }
  //         );
  //         searching = true;
  //       }
  //     }
  //   });
  // }
  public setSrc(html: HTMLImageElement) {
    html.src = "" //! ajouter une image par défaut pour les heros sans image
  }

  ngOnInit(): void {
    this._api.getRandomHero().subscribe(res => this.testHTML = res);

    // ? affiche tous les heros gentils
    this._remplir();
    for (const id of this.full) {
      this._api.getHeroById(id).subscribe((h) => this.Heroes.push(h));
    }

    // ? affiche tous les heros de l'échantillon
    // for (const id of this.echantillon) {
    //   this._api.getHeroById(id).subscribe((h) => this.Heroes.push(h));
    // }

    //? fonction qui donne un seul hero aléatoire gentil pour le hero du jour
    // this.getOneGood();


    // console.log(this.full)



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
