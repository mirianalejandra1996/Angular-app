import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // to make HTTP calls
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersListComponent } from './modules/customer/customers-list/customers-list.component';
import { CreateCustomerComponent } from './modules/customer/create-customer/create-customer.component';
import { NavbarComponent } from './modules/customer/components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
