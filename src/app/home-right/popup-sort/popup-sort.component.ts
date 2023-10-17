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

        // // New method to set upvotes filter
        // filterByUpvotes() {
        //   this.dataService.setUpvotesFilter(true);
        // }
      
        // // New method to set comments filter
        // filterByComments() {
        //   this.dataService.setCommentsFilter(true);
        // }
        filterBy(criteria: string): void {
          switch (criteria) {
            case 'Most Upvotes':
              this.dataService.upvotesFilterSubject.next(true);
              break;
            case 'Least Upvotes':
              this.dataService.upvotesFilterSubject.next(false);
              break;
            case 'Most Comments':
              this.dataService.commentsFilterSubject.next(true);
              break;
            case 'Least Comments':
              this.dataService.commentsFilterSubject.next(false);
              break;
            default:
              break;
          }
        }

}
