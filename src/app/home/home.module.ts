import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { SortComponent } from './sort/sort.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CategoryComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
