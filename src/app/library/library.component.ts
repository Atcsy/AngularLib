import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../shared/models/book';
import { LibraryService } from './library.service';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  providers: [FormGroupDirective],
})
export class LibraryComponent implements OnInit {
  products: IBook[] = [];
  searchForm!: FormGroup;
  blankSearchTerm: string = '';
  loading = true;

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchField: new FormControl(),
    });

    this.searchForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((result) => {
        this.libraryService.getPoducts(result.searchField).subscribe(
          (response) => {
            this.products = response.data;
          },
          (error) => {
            console.log(error);
          }
        );
      });
    //this will get back the all of the products
    this.libraryService.getPoducts(this.blankSearchTerm).subscribe(
      (response) => {
        this.loading = false;
        this.products = response.data;
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }
}
