import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title:string = 'app';
  saludo:any;
  constructor() {
    console.log('constructor')
    this.title = 'esto fue cambiado'
  }

  ngOnInit(): void {
    console.log('esto e init')
  }

  ngAfterViewInit(): void {
    console.log('esto es despues del init')
  }


}
