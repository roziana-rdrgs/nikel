import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { LoginRoutingModule } from './login-routing.module';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
