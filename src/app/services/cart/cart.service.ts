import { Injectable } from '@angular/core';
import { Book } from 'src/app/types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = [];

  constructor() { }

  add(book: Book){
    this.cart.push(book)
  }
}
