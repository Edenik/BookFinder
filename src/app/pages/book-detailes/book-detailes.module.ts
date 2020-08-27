import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailesPageRoutingModule } from './book-detailes-routing.module';

import { BookDetailesPage } from './book-detailes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookDetailesPageRoutingModule
  ],
  declarations: [BookDetailesPage]
})
export class BookDetailesPageModule {}
