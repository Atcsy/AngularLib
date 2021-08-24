import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule],
})
export class CartModule {
  constructor(cartService: CartService) {
    cartService.initLocalStorage();
  }
}
