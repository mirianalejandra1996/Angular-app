import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title:string = 'challenge';
  saludo:any;
  constructor() {
    console.log('CONSTRUCTOR test, this execute first')
    this.title = 'challenge modified'
  }

  ngOnInit(): void {
    console.log('INIT test, this execute first')
  }
  
  ngAfterViewInit(): void {
  console.log('ngAfterViewInit test, this execute third')
  }


}
