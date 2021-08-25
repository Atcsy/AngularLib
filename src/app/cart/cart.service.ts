import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart, CartItem } from '../shared/models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());
  cart$: Subject<Cart> = new Subject();

  constructor() {}

  initLocalStorage() {
    const cart: Cart = this.getCart();
    // console.log('init:' + cart);
    if (!cart) {
      const initalCart = {
        items: [],
      };

      const initalCartJson = JSON.stringify(initalCart);
      localStorage.setItem('cart', initalCartJson);
    }
  }

  getCart(): Cart {
    const cartJsonString = localStorage.getItem('cart') || '{"items":[]}';
    console.log('jsonstring' + cartJsonString);
    const cart: Cart = JSON.parse(cartJsonString);
    console.log('jsonparse:' + cart);
    return cart;
  }

  setCartItem(cartItem: CartItem): Cart {
    const cart = this.getCart();

    const cartItemExist = cart.items?.find(
      (item) => item.productId === cartItem.productId
    );
    if (cartItemExist) {
      cart.items?.map((item) => {
        if (item.productId === cartItem.productId) {
          //What is the optimal solution here? Instead of !
          item.quantity = item.quantity! + cartItem.quantity!;
        }
      });
    } else {
      cart.items?.push(cartItem);
    }
    const cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
    this.cart$.next(cart);

    return cart;
  }
}
