import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICartItem } from '../shared/models/cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItemA: ICartItem[] = [];
  endSub$: Subject<any> = new Subject();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this._getCartDetails();
  }

  ngOnDestroy(): void {
    this.endSub$.next();
    this.endSub$.complete();
  }

  _getCartDetails() {
    this.cartService.cart$.pipe(takeUntil(this.endSub$)).subscribe((cart) => {
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
