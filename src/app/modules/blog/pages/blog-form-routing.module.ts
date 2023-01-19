import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogFormComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BlogFormRoutingModule { }
