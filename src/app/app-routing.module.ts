import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';
import { SettingsModule } from './settings/settings.module';
const routes: Routes = [
  { path: 'home', component: HomeModule },
  { path: 'settings', component: SettingsModule },
  { path: 'cart', component: CartModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}