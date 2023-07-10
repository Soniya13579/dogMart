import { Component, OnInit, Pipe } from '@angular/core';
import { CustPipePipe } from './cust-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor() { }

  ngOnInit(): void {
  } 

}