import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
 
   ngOnInit() {
   }
}
