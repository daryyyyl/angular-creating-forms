import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup
  authorsArray: FormArray

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: [''],
      authors: this.fb.array([
        new FormControl(''), 
        new FormControl(''), 
        new FormControl('')
      ]),
      isbn: ['']
    })
    this.authorsArray = this.bookForm.get('authors') as FormArray
  }

  ngOnInit(): void {
    // this.bookForm.valueChanges.subscribe(data => {
    //   console.clear()
    //   console.log(data)
    // })
  }
  
  onSubmit = () => {
    // const myBookForm:Book = this.bookForm.getRawValue() as Book
    console.log('myBookForm', this.bookForm.getRawValue() as Book)
    this.bookForm.reset()
  }

  addAuthor = () => {
    this.authorsArray.push(new FormControl())
  }

  deleteAuthor = (i:number) => {
    this.authorsArray.removeAt(i)
  }
}
