import { Component, Input, OnInit } from '@angular/core';
import { Data, ProductRequest } from 'src/models/data.model';

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.scss']
})
export class HomeRightComponent implements OnInit {
  sortPopUpOpen = false;
  @Input() filterItems!: (category: string) => void;
  productReq:ProductRequest[] = [];
  ngOnInit(): void {
    // Ensure you use the filterItems function when needed
    if (this.filterItems) {
      this.filterItems('all');  // Pass the initial category value
    }
  }
 
  togglePopUp() {
    this.sortPopUpOpen =!this.sortPopUpOpen;
  }
}
