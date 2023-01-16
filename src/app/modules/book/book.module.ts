import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item.component';
import { BookListComponent } from './pages/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { CommandBarComponent } from 'src/app/shared/components/command-bar/command-bar.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
