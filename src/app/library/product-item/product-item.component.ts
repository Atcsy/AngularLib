import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { IBook } from 'src/app/shared/models/book';
import { CartItem } from 'src/app/shared/models/cart';
import { IPagination } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IBook;

  constructor(private cartService: CartService) {}

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product._id,
      quantity: 1,
    };
    this.cartService.setCartItem(cartItem);
  }

  ngOnInit(): void {}
}
