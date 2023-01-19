import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './modules/user/components/user.component';

const routes: Routes = [
  {
    path: 'book',
    loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'profile',
    component: UserComponent
  },
  {
    path: 'form',
    redirectTo: 'book/form',
    pathMatch: 'full'
  },
  {
    path: 'book/form',
    loadChildren: () => import('./modules/book/pages/book-form.module').then(m => m.BookFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
