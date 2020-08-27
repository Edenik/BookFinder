import { Component, OnInit } from '@angular/core';
import { BooksService, PrintType, FilterBooks } from 'src/app/core/services/books.service';
import { Book, ApiData } from 'src/app/core/models/books';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  searchTerm: string = '';
  type: PrintType = PrintType.all;
  filter: FilterBooks = FilterBooks.none;
  books: Book[];

  private subscription: Subscription = Subscription.EMPTY;
  constructor(private booksService: BooksService) { }

  searchChanged(event): void {
    this.books = [];
    if (this.searchTerm) {
      this.subscription = this.booksService.searchData(this.searchTerm, this.type, this.filter).subscribe((res: ApiData) => {
        if (res.items) {
          res.items.forEach(element => {
            const book: Book = {
              id: element.id,
              printType: element.volumeInfo.printType,
              publishDate: element.volumeInfo.publishedDate,
              title: element.volumeInfo.title,
              image: element.volumeInfo.imageLinks.thumbnail
            }
            this.books.push(book)
          });
        }
      });
    }
  }

  ngOnInit():void {
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
