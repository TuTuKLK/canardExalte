import { APIService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { TestcoService } from './../../../service/testco.service';


@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {
  
  public echantillon:any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];

  public Heroes:any[] = [];

  constructor(private _api:APIService) {}

  ngOnInit(): void {
    for (const i of this.echantillon) {
      this._api.getOne(i).subscribe((h)=>this.Heroes.push(h));
    }
  constructor(private _testhttp:TestcoService) { }

  ngOnInit(): void {
    this.echantillon.forEach(element => {
    this._testhttp.getHeroById(element).subscribe(res=>console.log(`${res.name} fait partie des ${res.biography.alignment=="good"?"Héros":"Vilains"}`));
    });


    // this.echantillon.forEach(element => {
    //   this._testhttp.getHeroById(element).subscribe(res=>console.log(`${res.biography.alignment=="good"}`?`${res.name} fait partie des Héros`:null));
    //   });
  }

}
