import { TestcoService } from './../../../service/testco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent implements OnInit {
  public echantillon:any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];


  constructor(private _testhttp:TestcoService) { }

  ngOnInit(): void {
    this.echantillon.forEach(element => {
      
      this._testhttp.getHero().subscribe(res=>console.log(`${res.name} fait partie des ${res.biography.alignment=="good"?"héros":"Vilains"}`));
      // this._testhttp.getHero().subscribe(res=>console.log(`${res.biography.alignment=="bad"?${res.name}:}`));
    });
  }

}
