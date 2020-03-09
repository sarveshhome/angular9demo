import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding-demo',
  templateUrl: './propertybinding-demo.component.html',
  styleUrls: ['./propertybinding-demo.component.css']
})
export class PropertybindingDemoComponent implements OnInit {

  btnHeight = 100;
  btnWidth = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
