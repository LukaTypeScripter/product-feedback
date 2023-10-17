import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, map, of } from 'rxjs';
import { Data, ProductRequest } from 'src/models/data.model';
import { data } from 'src/app/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
 
  private dataSubject = new BehaviorSubject<Data[]>([]);
  private activeCategorySubject = new BehaviorSubject<string>('all');
  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  datas$ = this.dataSubject.asObservable();
  activeCategory$ = this.activeCategorySubject.asObservable();
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();
  // Add other methods and observables as needed

  constructor() {
    this.dataSubject.next(data);
    this.activeCategorySubject.next('all');
  }

  // Move the combineLatest logic to a method in this service
  getFilteredData$(): Observable<ProductRequest[][]> {
    return combineLatest([this.datas$, this.activeCategory$]).pipe(
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
  }
  setActiveCategory(category: string): void {
    this.activeCategorySubject.next(category);
  }

  toggleSidebar(event: boolean): void {
    this.sidebarOpenSubject.next(event);
  }
}
