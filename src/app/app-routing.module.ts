import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./pages/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'books/:id',
    loadChildren: () => import('./pages/book-detailes/book-detailes.module').then( m => m.BookDetailesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
