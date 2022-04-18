import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { } //We have nothing to do here because it's just for making injection of the http request

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>("/customers/customers/listclientes")
  }
  
  addCustomer(customer: any): Observable<any>{
    return this.http.post<any>("/customers/customers/creacliente", customer);
  }

  getKpi(): Observable<any>{
      return this.http.get<any>("/customers/kpideclientes")
  }

  getCustomerById(id: string): Observable<any> {
    return this.http.get<any>(`/customers/customers/getById/${id}`)
  }
  // updateCustomerById(): Observable<any> {

  // }





  // agregarElemento(data:any): Observable<any> {
  //   return this.http.post<any>(`${this.globals.IP_SERVER}/${this.elementosUM}/`, data)
  // }
}
