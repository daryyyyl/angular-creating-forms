import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item.component';
import { BlogListComponent } from './pages/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommandBarComponent } from 'src/app/shared/components/command-bar/command-bar.component';
import { Blog } from './models/blog';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    CommandBarComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule {

  blog: Blog | undefined;

  // @Output('outItem') actionEmitter = new EventEmitter<Blog>();
  @Output() actionEmitter = new EventEmitter<Blog>();

  @Output() siblingEmitter = new EventEmitter<string>();
  @Input() acceptFromSibling: string | undefined

  sendAction = () => {
    this.actionEmitter.emit(this.blog);
  }
}
