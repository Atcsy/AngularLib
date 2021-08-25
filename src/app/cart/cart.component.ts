import { Component, OnInit } from '@angular/core';
import { ICartItem } from '../shared/models/cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItemA: ICartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this._getCartDetails();
  }

  _getCartDetails() {
    this.cartService.cart$.pipe().subscribe((cart) => {
      this.cartItemA = [];
      cart.items?.forEach((cartItem) => {
        this.cartItemA.push({
          productId: cartItem.productId,
          title: cartItem.title,
          quantity: cartItem.quantity,
        });
      });
    });
  }

  getDeleteCartItemId(cartItemId: string) {
    this.cartService.deleteCartItem(cartItemId);
  }
}
