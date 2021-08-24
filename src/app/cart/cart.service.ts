import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../shared/models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  initLocalStorage() {
    const cart: Cart = this.getCart();
    if (!cart) {
      const initalCart = {
        items: [],
      };

      const initalCartJson = JSON.stringify(initalCart);
      localStorage.setItem('cart', initalCartJson);
    }
  }

  getCart(): Cart {
    const cartJsonString: string = localStorage.getItem('cart') || '{}';
    const cart: Cart = JSON.parse(cartJsonString || '{}');
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
    return cart;
  }
}
