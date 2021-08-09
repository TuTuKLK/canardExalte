import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  public seconds: number = 40;
  private _timer: any;
  public state: any;

  constructor() { }

  ngOnInit(): void {
    this.startChrono();

    if(this.seconds < 35){
      this._timer = setInterval(() => this.removeOneSecond(), 10);
    }
  }

  public startChrono(){
    this._timer = setInterval(() => this.removeOneSecond(), 1000);

    if(this.seconds < 35){
      this.state = true
    }
    return this.seconds;
  }

  private removeOneSecond(){
    this.seconds--;
  }

  public stopChrono(){
    clearInterval(this._timer);
  }
}
