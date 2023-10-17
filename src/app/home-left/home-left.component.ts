import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data, ProductRequest } from 'src/models/data.model';
import { data } from '../data';
import { DataService } from 'src/services/data.service';

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
    this.filteredData$ = this.dataService.getFilteredData$();
    this.filteredData$.subscribe(filteredData => {
      console.log('Filtered Data:', filteredData);
    });
    this.sidebarOpen$ = this.dataService.sidebarOpen$;
    this.activeCategory$ = this.dataService.activeCategory$;
  }

filterItems(category: string): void {
  this.dataService.setActiveCategory(category);
}

  toggleSidebar(event: boolean) {
    this.sidebarOpenSubject.next(event);
  }
}
