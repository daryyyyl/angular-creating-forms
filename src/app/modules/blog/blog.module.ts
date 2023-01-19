import { EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item.component';
import { BlogListComponent } from './pages/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommandBarComponent } from 'src/app/shared/components/command-bar/command-bar.component';
import { Blog } from './models/blog';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BlogRoutingModule
  ]
})
export class BlogModule {
}
