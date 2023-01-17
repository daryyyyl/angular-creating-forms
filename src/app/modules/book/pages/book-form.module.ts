import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormRoutingModule } from './book-form-routing.module';



@NgModule({
  declarations: [
    BookFormComponent
  ],
  imports: [
    BookFormRoutingModule,
    CommonModule, 
    ReactiveFormsModule
  ]
})
export class BookFormModule { }
