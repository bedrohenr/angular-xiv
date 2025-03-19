import { Component, OnInit } from '@angular/core';

@inter
interface Book {
  name: string;
  author: string;
  img_path: string;
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
      name: 'Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos',
      author: 'Aditya Y. Bhargava',
      img_path: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY425_.jpg'
    },
    {
      name: 'Código Limpo: Habilidades Práticas do Agile Software',
      author: 'Robert C. Martin',
      img_path: 'https://m.media-amazon.com/images/I/71dH97FwGbL._SY385_.jpg'
    },
    {
      name: 'JavaScript: O Guia Definitivo',
      author: 'David Flanagan',
      img_path: 'https://m.media-amazon.com/images/I/91z1xY4ppaL._SY425_.jpg'
    }
  ];

}
