import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogForm: FormGroup
  commentsArray: FormArray

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([
        new FormControl(''),
        new FormControl(''),
        new FormControl('')
      ])
    })
    this.commentsArray = this.blogForm.get('comments') as FormArray
  }

  ngOnInit(): void {

  }

  onSubmit = () => {
    // const myBlogForm:Book = this.blogForm.getRawValue() as Blog
    console.log('myBlogForm', this.blogForm.getRawValue() as Blog)
    this.blogForm.reset()
  }

  addComment = () => {
    this.commentsArray.push(new FormControl())
  }

  deleteComment = (i:number) => {
    this.commentsArray.removeAt(i)
  }
}
