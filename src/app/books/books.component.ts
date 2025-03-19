import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  img_path: string;
  price: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textOnHtml: string = '';

  bookButtonDisabled = false;
  isShowing = false;


  books: Book[] = [
    {
      name: 'entendendo algoritmos: um guia ilustrado para programadores e outros curiosos',
      author: 'aditya y. bhargava',
      img_path: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY425_.jpg',
      price: 200
    },
    {
      name: 'código limpo: habilidades práticas do agile software',
      author: 'robert c. martin',
      img_path: 'https://m.media-amazon.com/images/I/71dH97FwGbL._SY385_.jpg',
      price: 350
    },
    {
      name: 'javascript: o guia definitivo',
      author: 'david flanagan',
      img_path: 'https://m.media-amazon.com/images/I/91z1xY4ppaL._SY425_.jpg',
      price: 450
    }
  ];

}
