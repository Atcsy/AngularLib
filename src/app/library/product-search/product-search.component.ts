import { Component, OnInit, Input, Output } from "@angular/core";
import { IBook } from "src/app/shared/models/book";
import { IPagination } from "src/app/shared/models/pagination";

@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.scss"],
})
export class ProductSearchComponent implements OnInit {
  searchTerm = "";
  @Input() product!: IBook;
  @Output() search: string = this.searchTerm;

  constructor() {}

  ngOnInit(): void {}
}
