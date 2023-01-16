import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  private blog: Blog[] = [
    {
      id: 1,
      title: 'title 1',
      description: 'description 1',
      author: 'author 1',
      comments: ['me', 'myself', 'I']
    },
    {
      id: 2,
      title: 'title 2',
      description: 'description 2',
      author: 'author 2',
      comments: ['me', 'myself', 'I']
    },
    {
      id: 3,
      title: 'title 3',
      description: 'description 3',
      author: 'author 3',
      comments: ['me', 'myself', 'I']
    }
  ]

  getBlogs = () => {
    return this.blog;
  }
}
