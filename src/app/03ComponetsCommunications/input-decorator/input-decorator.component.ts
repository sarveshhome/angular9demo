import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent implements OnInit {

  message = 'i am parent';
  childmessage ='I am passed from Parent to child component';
  
  constructor() { }

  ngOnInit(): void {

  }

}
