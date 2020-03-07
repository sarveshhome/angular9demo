import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-demo',
  templateUrl: './interpolation-demo.component.html',
  styleUrls: ['./interpolation-demo.component.css']
})
export class InterpolationDemoComponent implements OnInit {


  product ={
    title: 'Mobile',
    price:7000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
