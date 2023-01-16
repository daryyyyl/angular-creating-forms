import { Component, Input } from '@angular/core';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() blog: Blog | undefined

  edit = (id:number | undefined) => {
    console.log('Edit: ', id)
  }

  delete = (id:number | undefined) => {
    console.log('Delete: ', id)
  }
}
