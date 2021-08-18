import { Component, OnInit, Input } from "@angular/core";
import { IBook } from "src/app/shared/models/book";
import { IPagination } from "src/app/shared/models/pagination";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IBook;

  constructor() {}

  ngOnInit(): void {}
}
