import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartItem } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() icart!: ICartItem;
  @Output() deleteCartItemId = new EventEmitter();

  constructor() {}

  emitDeleteCartItemId(productId: any) {
    this.deleteCartItemId.emit(productId);
  }

  ngOnInit(): void {}
}
