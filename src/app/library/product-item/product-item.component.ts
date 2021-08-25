import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { IBook } from 'src/app/shared/models/book';
import { ICartItem } from 'src/app/shared/models/cart';
import { IPagination } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IBook;
  addedTocart = false;
  buttonText = 'Add To Cart';

  constructor(private cartService: CartService) {}

  addProductToCart() {
    const cartItem: ICartItem = {
      productId: this.product._id,
      title: this.product.title,
      quantity: 1,
    };
    this.addedTocart = true;
    this.buttonText = 'Added To Cart';
    this.cartService.setCartItem(cartItem);
  }

  ngOnInit(): void {}
}
