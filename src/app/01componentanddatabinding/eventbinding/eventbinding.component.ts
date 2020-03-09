import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  addProduct(){
    console.log('add Product');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
