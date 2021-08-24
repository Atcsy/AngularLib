import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../shared/models/book';
import { LibraryService } from './library.service';
import { delay, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  products: IBook[] = [];
  searchTerm: string = '';

  constructor(private libraryService: LibraryService) {}

  searchTermEvent(search: any) {
    this.libraryService
      .getPoducts(search)
      .pipe(delay(1000), distinctUntilChanged())
      .subscribe(
        (response) => {
          this.products = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.libraryService.getPoducts(this.searchTerm).subscribe(
      (response) => {
        this.products = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
