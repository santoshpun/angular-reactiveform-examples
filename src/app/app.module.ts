import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginvalidationComponent } from './loginvalidation/loginvalidation.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginvalidationComponent,
    Example3Component,
    Example4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
