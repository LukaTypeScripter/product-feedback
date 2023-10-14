import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data, ProductRequest } from 'src/models/data.model';
import { data } from '../data';

@Component({
  selector: 'home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.scss']
})
export class HomeComponent implements OnInit {
  categories: string[] = ["all", "UI", "UX", "enhancement", "feature", "Bug"];
  private dataSubject = new BehaviorSubject<Data[]>([]);
  private activeCategorySubject = new BehaviorSubject<string>('all');
  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);

  // Observable properties
  datas$ = this.dataSubject.asObservable();
  activeCategory$ = this.activeCategorySubject.asObservable();
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();

  // Computed observable for filteredData
  filteredData$ = this.dataSubject.pipe(
    map((data: Data[]) => {
      const activeCategory = this.activeCategorySubject.value;
      if (activeCategory.toLowerCase() === 'all') {
        return data.map((item) => item.productRequests);
      } else {
        return data.map((item) =>
          item.productRequests.filter((request: ProductRequest) =>
            request.category.toLowerCase() === activeCategory.toLowerCase()
          )
        );
      }
    })
    
  );

  constructor() {
    this.dataSubject.next(data);
    console.log(this.filteredData$);
    
  }

  ngOnInit() {
    console.log('Initial Data:', this.dataSubject.value,this.filteredData$);
    this.filteredData$.subscribe(filteredData => {
      console.log('Filtered Data:', filteredData);
    });
  }

  filterItems(category: string): void {
    this.activeCategorySubject.next(category);
  }

  toggleSidebar(event: boolean) {
    this.sidebarOpenSubject.next(event);
  }
}
