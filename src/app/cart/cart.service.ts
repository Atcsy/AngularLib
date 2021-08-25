import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart, ICartItem } from '../shared/models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<ICart> = new BehaviorSubject(this.getCart());

  constructor() {}

  initLocalStorage() {
    const cart: ICart = this.getCart();
    if (!cart) {
      const initalCart = {
        items: [],
      };

      const initalCartJson = JSON.stringify(initalCart);
      localStorage.setItem('cart', initalCartJson);
    }
  }

  getCart(): ICart {
    const cart = JSON.parse(localStorage.getItem('cart')!);
    return cart;
  }

  setCartItem(cartItem: ICartItem): ICart {
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

  deleteCartItem(productId: string) {
    const cart = this.getCart();
    const updatedCart = cart.items?.filter(
      (item) => item.productId !== productId
    );

    cart.items = updatedCart;
    const cartJsonString = JSON.stringify(cart);
    localStorage.setItem('cart', cartJsonString);

    this.cart$.next(cart);
  }
}
