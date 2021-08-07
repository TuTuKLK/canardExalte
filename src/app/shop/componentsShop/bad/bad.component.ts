import { TestcoService } from './../../../service/testco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent implements OnInit {


  constructor(private _testhttp:TestcoService) { }

  ngOnInit(): void {
    this._testhttp.getHero().subscribe(res=>console.log(res));
  }

}
