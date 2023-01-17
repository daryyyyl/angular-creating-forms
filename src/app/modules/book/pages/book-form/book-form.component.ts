import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: [''],
      isbn: ['']
    })
  }

  ngOnInit(): void {
    this.bookForm.valueChanges.subscribe(data => {
      console.log(data)
    })
  }

  onSubmit = () => {
    console.log(this.bookForm.value)
  }
}
