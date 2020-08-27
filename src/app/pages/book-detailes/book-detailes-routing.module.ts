import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailesPage } from './book-detailes.page';

const routes: Routes = [
  {
    path: '',
    component: BookDetailesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookDetailesPageRoutingModule {}
