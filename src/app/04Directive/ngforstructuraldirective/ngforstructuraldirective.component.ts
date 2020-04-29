import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforstructuraldirective',
  templateUrl: './ngforstructuraldirective.component.html',
  styleUrls: ['./ngforstructuraldirective.component.css']
})
export class NgforstructuraldirectiveComponent implements OnInit {

  data = [
    {name: 'foo'},
    {name: 'koo'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
