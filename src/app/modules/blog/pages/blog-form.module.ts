import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogFormRoutingModule } from './blog-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogFormComponent
  ],
  imports: [
    BlogFormRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BlogFormModule { }
