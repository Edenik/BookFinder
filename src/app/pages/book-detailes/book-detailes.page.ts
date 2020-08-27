import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/core/services/books.service';
import { Book, BookItem } from 'src/app/core/models/books';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-detailes',
  templateUrl: './book-detailes.page.html',
  styleUrls: ['./book-detailes.page.scss'],
})
export class BookDetailesPage implements OnInit {

  book:Book;
  private subscription: Subscription = Subscription.EMPTY;

  constructor(private activatedRoute:ActivatedRoute, private booksService:BooksService) { }

  openWebsite():void {
    window.open(this.book.buyLink, '_blank');
  }

  searchBook(id){
   this.subscription =  this.booksService.searchBook(id).subscribe((res:BookItem) => {
      this.book = {
        id:res.id, 
        printType:res.volumeInfo.printType,
        publishDate:res.volumeInfo.publishedDate,
        title:res.volumeInfo.title,
        image:res.volumeInfo.imageLinks.thumbnail,
        buyLink:res.saleInfo.buyLink,
        saleability:res.saleInfo.saleability,
        language:res.volumeInfo.language,
        pageCount:res.volumeInfo.pageCount,
        publisher:res.volumeInfo.publisher
      }
    })
  }

  ngOnInit():void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.searchBook(id);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
