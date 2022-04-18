import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CustomersListComponent } from './modules/customer/customers-list/customers-list.component';
import { CreateCustomerComponent } from './modules/customer/create-customer/create-customer.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list-customers', component: CustomersListComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'customer-detail/:id', component: CreateCustomerComponent},
  // {path: 'edit-customer/:id', component: CreateCustomerComponent},
  {path: '**', redirectTo: '/list-customers', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppRoutingModule { }
