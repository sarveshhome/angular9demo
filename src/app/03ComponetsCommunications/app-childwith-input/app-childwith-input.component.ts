import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-app-childwith-input',
  templateUrl: './app-childwith-input.component.html',
  styleUrls: ['./app-childwith-input.component.css']
})
export class AppChildwithInputComponent implements OnInit {
  @Input() greetMessage:string;
  constructor() { }

  ngOnInit(): void {
  }

}
