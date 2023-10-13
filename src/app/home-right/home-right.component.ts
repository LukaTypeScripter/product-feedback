import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Data, ProductRequest } from 'src/models/data.model';

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.scss']
})
export class HomeRightComponent implements OnInit {
  sortPopUpOpen = false;
  @Input() filterItems!: (category: string) => void;
  productReq: ProductRequest[] = [];
  @Input() filteredData: ProductRequest[][] = [];
  @Output() sideBarOpen = new EventEmitter<boolean>();
  ngOnInit(): void {

    if (!this.filteredData) {
      this.filteredData = [];
    }
    if (this.filterItems) {
      this.filterItems('all');
    }
  }
  toggleSideBarOpen() {
    this.sideBarOpen.emit(!this.sideBarOpen);
  }
  togglePopUp() {
    this.sortPopUpOpen = !this.sortPopUpOpen;
  }
}
