import { Component, Input, OnInit } from '@angular/core';
import { ProductRequest } from 'src/models/data.model';

@Component({
  selector: 'app-popup-sort',
  templateUrl: './popup-sort.component.html',
  styleUrls: ['./popup-sort.component.scss']
})
export class PopupSortComponent implements OnInit {
  @Input() filteredData: ProductRequest[][] = [];
    ngOnInit(): void {
      console.log("wada",this.filteredData);
    }

}
