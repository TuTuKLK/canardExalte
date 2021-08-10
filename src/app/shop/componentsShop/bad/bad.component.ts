import { Observable } from 'rxjs';
import { APIlocalService } from 'src/app/services/apilocal.service';
import { TestcoService } from './../../../service/testco.service';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent implements OnInit {
  public echantillon: any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];
  public echantillonVilain: any[] = [];
  public nameHero: string = 'buffy';

  public Heroes: any[] = [];
  public allBad: any ;


  public testHTML: any;

  public hero = '';
  public align = '';

  public full: any[] = [];
  private _remplir() {
    for (let x = 1; x < 732; x++) {
      this.full.push(x)
    }
  }



  constructor(private _testhttp: APIlocalService) { }

  public setSrc(html: HTMLImageElement) {
    html.src = "../../asset/default.png" //! ajouter une image par défaut pour les heros sans image
  }

  ngOnInit(): void {
    this._testhttp.getRandomHero().subscribe(res => this.testHTML = res);

    // this._remplir()


    this._testhttp.getAllBad().subscribe(res=>{
      console.log(res);
      console.log('toto');
    });
    


    // ? affiche tous les heros gentils
    for (const id of this.full) {
      this._testhttp.getHeroById(id).subscribe((h) => this.Heroes.push(h));
    }

    this.full.forEach(element => {
      this._testhttp.getHeroById(element).subscribe(res => this._setHero(res));
    });


    // this._testhttp.getHero().subscribe(reponse=>console.log(reponse));

  }
  private _setHero(res: any) {
    this.align = res.biography.alignment;
    this.hero = res.name;
    if (this.align === 'bad') {
      console.log(`${this.hero} est dans la liste des Vilains`);
    }
  }
}
