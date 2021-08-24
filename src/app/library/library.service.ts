import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IBook } from '../shared/models/book';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPoducts(searchTerm: string): Observable<IPagination> {
    return this.http.get<IPagination>(this.baseUrl + 'books', {
      params: new HttpParams().set('name', searchTerm),
    });
  }
}
