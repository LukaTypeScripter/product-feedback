import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data, ProductRequest } from 'src/models/data.model';
import { DataService } from 'src/services/data.service';

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
  sortCategory:string = ''
  ngOnInit(): void {
    console.log(this.sideBarOpen);
    
  }
  constructor(private dataService: DataService) {
  }
getSortedList (event:any) {
this.sortCategory = event
}

  togglePopUp() {
    this.sortPopUpOpen = !this.sortPopUpOpen;
  }

  updateFilteredData(data: ProductRequest[][]): void {
    this.filteredData = data;
  }
  upVoteOnClick(productId: number): void {
    this.dataService.toggleUpvotes(productId);
  }
}
