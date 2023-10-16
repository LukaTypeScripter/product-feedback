import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
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
 sidebarOpen:boolean  = false;

  // Observable properties
  datas$ = this.dataSubject.asObservable();
  activeCategory$ = this.activeCategorySubject.asObservable();

  // Computed observable for filteredData using combineLatest
  filteredData$: Observable<ProductRequest[][]> = combineLatest([
    this.datas$,
    this.activeCategory$
  ]).pipe(
    map(([data, activeCategory]) => {
      if (activeCategory.toLowerCase() === 'all') {
        return data.map((item) => item.productRequests);
      } else {
        return data
          .map((item) =>
            item.productRequests.filter((request: ProductRequest) =>
              request.category.toLowerCase() === activeCategory.toLowerCase()
            )
          );
      }
    })
  );

  constructor() {
    this.dataSubject.next(data);
    this.activeCategorySubject.next('all');
  }

  ngOnInit() {
    this.filteredData$.subscribe(filteredData => {
      console.log('Filtered Data:', filteredData);
    });
  }

  filterItems(category: string): void {
    this.activeCategorySubject.next(category);
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
