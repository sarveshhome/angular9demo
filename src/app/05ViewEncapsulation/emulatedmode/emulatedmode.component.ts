import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulatedmode',
  templateUrl: './emulatedmode.component.html',
  styleUrls: ['./emulatedmode.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedmodeComponent implements OnInit {

  title  = 'Emulated Mode';
  constructor() { }

  ngOnInit(): void {
  }

}
