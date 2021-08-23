import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { IBook } from '../shared/models/book';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  baseUrl = 'http://localhost:5000/api/v1/';

  constructor(private http: HttpClient) {}

  getPoducts(searchTerm: string): Observable<IPagination> {
    return this.http.get<IPagination>(this.baseUrl + 'books', {
      params: new HttpParams().set('name', searchTerm),
    });
  }
}
