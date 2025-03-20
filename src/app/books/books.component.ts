import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor( private booksService: BooksService ) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void { }

  books: Book[] = [];
  textOnHtml: string = '';
  bookButtonDisabled = false;
  isShowing = true;

  addToCart(event: Book){
    console.log(event);
  }
}
