import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public buyedProducts : any[] = [];

  public get total(): number{
    let t = 0;
    for(let p of this.buyedProducts){
      t+=p.price;
    }
    return t;
  }

  constructor() { }

  public addProductToCart(product: any){
    this.buyedProducts.push(product)
  }
}
