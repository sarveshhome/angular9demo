import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nodemode',
  templateUrl: './nodemode.component.html',
  styleUrls: ['./nodemode.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class NodemodeComponent implements OnInit {

  title ='None view Encapsulation';
  constructor() { }

  ngOnInit(): void {
  }

}
