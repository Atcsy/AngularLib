import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IBook } from 'src/app/shared/models/book';
import { IPagination } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent implements OnInit {
  @Output() searchTermEvent = new EventEmitter();
  @Input() product!: IBook;

  constructor() {}

  onKeyDownSearch(event: any) {
    this.searchTermEvent.emit(event.target.value);
  }

  ngOnInit(): void {}
}
