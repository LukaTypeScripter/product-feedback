import { Component, Input, OnInit } from '@angular/core';
import { ProductRequest } from 'src/models/data.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-popup-sort',
  templateUrl: './popup-sort.component.html',
  styleUrls: ['./popup-sort.component.scss']
})
export class PopupSortComponent implements OnInit {
  @Input() filteredData: ProductRequest[][] = [];
  fillteItems:string[] = ["Most Upvotes",'Least Upvotes','Most Comments','Least Comments']
    ngOnInit(): void {
      console.log("wada",this.filteredData);
    }
    constructor(private dataService: DataService) {
    }

    sortData(sortBy: string): void {
      this.filteredData = this.dataService.sortData(this.filteredData, sortBy);
    }
  

}
