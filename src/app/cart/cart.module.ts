import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
