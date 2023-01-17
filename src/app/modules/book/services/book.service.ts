import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor() { }

  private book: Book[] = [
    {
      name: 'name 1',
      authors: ['me', 'myself', 'I'],
      isbn: '1'
    },
    {
      name: 'name 2',
      authors: ['me', 'myself', 'I'],
      isbn: '2'
    },
    {
      name: 'name 3',
      authors: ['me', 'myself', 'I'],
      isbn: '3'
    }
  ]

  getBooks = () => {
    return this.book;
  }
}
