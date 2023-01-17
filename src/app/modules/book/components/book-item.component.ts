import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book: Book | undefined

  edit = (name:string | undefined) => {
    console.log('Edit: ', name)
  }

  delete = (name:string | undefined) => {
    console.log('Delete: ', name)
  }
}
