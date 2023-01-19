import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item.component';
import { BookListComponent } from './pages/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule
  ]
})
export class BookModule { }
