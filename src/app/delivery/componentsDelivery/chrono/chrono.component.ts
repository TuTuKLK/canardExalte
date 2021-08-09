import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  public seconds: number = 30;
  private _timer: any = 30;
  public timerIsActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.startChrono();
  }

  public startChrono(){
    this._timer = setInterval(() => this.removeOneSecond(), 1000);
    this.timerIsActive = true;
    return this.seconds;
  }

  private removeOneSecond(){
    this.seconds--;
  }
}
