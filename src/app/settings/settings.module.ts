import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
