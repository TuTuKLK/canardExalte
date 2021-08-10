import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interruption',
  templateUrl: './interruption.component.html',
  styleUrls: ['./interruption.component.scss']
})
export class InterruptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.documentElement.addEventListener('click', ()=>this.fullScreen());
    // document.documentElement.requestFullscreen();
    document.documentElement.click();
  }

  fullScreen() {
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen;
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }
}
