import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { SortComponent } from './sort/sort.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'category',component:CategoryComponent},
  {path:'sort',component:SortComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
