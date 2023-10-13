// home-left.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Data, ProductRequest } from 'src/models/data.model';
import { data } from '../data';

@Component({
  selector: 'home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.scss']
})
export class HomeComponent implements OnInit {
  categories: string[] = ["all", "UI", "UX", "enhancement", "feature", "Bug"];
  product: ProductRequest[][] = data.map((item) => item.productRequests);
  datas: Data[] = data;
 filteredData: ProductRequest[][] = [];
  constructor() {
    this.product = data.map((item) => item.productRequests);
  }
  ngOnInit() {
    

  }

  filterItems(category: string): void {
    console.log(category);
    if (category.toLowerCase() === 'all') {
      this.filteredData = this.product;
    } else {
      this.filteredData = this.product.map((item: ProductRequest[]) =>
        item.filter((request: ProductRequest) => request.category.toLowerCase() === category.toLowerCase())
      );
    }
    console.log(this.filteredData); 
  }
  
}
