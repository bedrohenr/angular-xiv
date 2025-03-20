import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../../services/books/books.service';
import { BooksComponent } from '../../books/books.component';
import { BookComponent } from '../../books/book/book.component';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [
    CommonModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
