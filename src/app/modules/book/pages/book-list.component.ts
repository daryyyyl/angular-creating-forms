import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  book: Book[]

  constructor(private bookService: BookService) {
    this.book = bookService.getBooks();
    console.log(this.book)
  }
}
