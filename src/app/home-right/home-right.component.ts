import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data, ProductRequest } from 'src/models/data.model';

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.scss']
})
export class HomeRightComponent implements OnInit {
  sortPopUpOpen = false;
  productReq: ProductRequest[] = [];
  @Input() filteredData: ProductRequest[][] = [];
 @Input() sideBarOpen:boolean = false

  ngOnInit(): void {
    console.log(this.sideBarOpen);
    
  }


  togglePopUp() {
    this.sortPopUpOpen = !this.sortPopUpOpen;
  }

  updateFilteredData(data: ProductRequest[][]): void {
    this.filteredData = data;
  }
}
