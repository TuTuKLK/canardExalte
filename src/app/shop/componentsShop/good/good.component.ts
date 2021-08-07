import { Component, OnInit } from '@angular/core';
import { TestcoService } from './../../../service/testco.service';


@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  constructor(private _testhttp:TestcoService) { }

  ngOnInit(): void {
    this._testhttp.getHero().subscribe(res=>console.log(res));

  }

}
