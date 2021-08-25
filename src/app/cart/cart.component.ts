import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this._getCartDetails();
  }

  _getCartDetails() {
    this.cartService.cart$.pipe().subscribe((cart) => {
      cart.items?.forEach((cartItem) => console.log(cartItem));
    });
  }
}
