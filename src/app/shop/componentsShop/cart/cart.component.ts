import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public get selectedHeroes():any[]{
    return this._cartService.selectedHeroes
  }

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.selectedHeroes);
  }

  deleteHero(hero:any){
    let idhero = this.selectedHeroes[hero+1];
    this._cartService.selectedHeroes.splice(idhero, 1);
  }


}
