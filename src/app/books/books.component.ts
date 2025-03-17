import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookButtonDisabled = false;
  books = [
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

  handleClick(){
    console.log("Botão clicado");
  }

  textOnHtml: string = '';
  handleInput(event: any){
    // console.log(event.target.value);
    this.textOnHtml = event.target.value;
  }
}
