import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../shared/models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  initLocalStorage() {
    const initalCart = {
      items: [],
    };

    const initalCartJson = JSON.stringify(initalCart);
    localStorage.setItem('cart', initalCartJson);
  }

  getCart(): Cart {
    const cartJsonString: string = localStorage.getItem('cart') || '{}';
    const cart: Cart = JSON.parse(cartJsonString || '{}');
    return cart;
  }

  setCartItem(CartItem: CartItem): Cart {
    const cart = this.getCart();
    cart.items?.push(CartItem);
    const cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
    return cart;
  }
}
