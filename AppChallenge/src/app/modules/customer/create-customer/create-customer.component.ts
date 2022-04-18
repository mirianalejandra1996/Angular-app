import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  // ":" is to define the type of the variable
  // "=" is to asign the value of the variable
  createCustomer: FormGroup;
  submitted = false;

  id : string | null;
  title : string;
  isDisabled = false;
  // isDisabled : boolean;
  // title = 'Add Customer';
  
  constructor( private fb: FormBuilder, private customerService : CustomerService, private router : Router, private aRoute : ActivatedRoute) {
    this.createCustomer = this.fb.group({
      name: [{value: '', disabled: this.isDisabled}, Validators.required],
      lastname: [{value: '', disabled: this.isDisabled}, Validators.required],
      dni: [{value: '', disabled: this.isDisabled}, Validators.required],
      age: [{value: '', disabled: this.isDisabled}, Validators.required],
      birth: [{value: '', disabled: this.isDisabled}, Validators.required],
      isAlive: [{value: ''}],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id'); // I can access to the id as a parameter of path
    console.log(this.id)
  }

  ngOnInit() {
    this.isEditable()
  }

  addCustomer(){
    this.submitted = true;

    if(this.createCustomer.invalid){
      console.log("can submit?", this.submitted)
      return;
    }

    const customer: any = {
      name: this.createCustomer.value.name,
      lastname: this.createCustomer.value.lastname,
      dni: this.createCustomer.value.dni,
      age: this.createCustomer.value.age,
      birth: this.createCustomer.value.birth,
      isAlive: true,
    }
    console.log(customer)

    this.customerService.addCustomer(customer).subscribe(response => {
      this.router.navigate(['/list-customers'])
    })
  }

  isEditable() {
    this.title = 'Add Customer';
    if (this.id !== null) {
      for (const formName in this.createCustomer.controls){
        console.log('formName, ', formName)
        this.createCustomer.get(formName).disable()
      }
      this.isDisabled = true;
      this.title = 'Customer Details';
      this.customerService.getCustomerById(this.id).subscribe(data => {
        // I call this function is for setting the data of the customer in the form
        this.createCustomer.setValue({
          name: data.name,
          lastname: data.lastname,
          dni: data.dni,
          age: data.age,
          birth: data.birth,
          isAlive: true,
        })
      })
    }
  }

}
