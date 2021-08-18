import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { IBook } from "../shared/models/book";
import { LibraryService } from "./library.service";

@Component({
  selector: "app-library",
  templateUrl: "./library.component.html",
  styleUrls: ["./library.component.scss"],
})
export class LibraryComponent implements OnInit {
  products: IBook[] = [];

  constructor(private libraryService: LibraryService) {}
  search: string = "";

  ngOnInit(): void {
    this.libraryService.getPoducts(this.search).subscribe(
      (response) => {
        this.products = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
