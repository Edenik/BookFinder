import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiData, BookItem } from '../models/books';


export enum PrintType {
  all = 'all',
  books = 'books',
  magazines = 'magazines'
}

export enum FilterBooks {
  ebooks = 'ebooks',
  freeEbooks = 'free-ebooks',
  full = 'full',
  paidEbooks = 'paidEbooks',
  partial = "partial",
  none = "none"
}

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http: HttpClient) { }

  searchData(title: string, printType:string, filter:string): Observable<ApiData>{
    let link;
    filter === 'none' ?  link = `${environment.apiUrl}?q=${encodeURI(title)}&printType=${printType}&key=${environment.apiKey}` : link = `${environment.apiUrl}?q=${encodeURI(title)}&printType=${printType}&filter=${filter}&key=${environment.apiKey}` 
    return this.http.get<ApiData>(link);
  }

  searchBook(id:string): Observable<BookItem>{
    return this.http.get<BookItem>(`${environment.apiUrl}/${id}`)
  }
}
