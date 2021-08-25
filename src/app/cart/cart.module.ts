import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';
import { CartIconComponent } from './cart-icon/cart-icon.component';

@NgModule({
  declarations: [CartComponent, CartIconComponent],
  imports: [CommonModule],
  exports: [CartComponent, CartIconComponent],
})
export class CartModule {
  constructor(cartService: CartService) {
    cartService.initLocalStorage();
  }
}
