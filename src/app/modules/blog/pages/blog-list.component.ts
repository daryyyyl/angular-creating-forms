import { Component } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blog: Blog[]

  constructor(private blogService: BlogService) {
    this.blog = blogService.getBlogs();
    console.log(this.blog)
  }
}
