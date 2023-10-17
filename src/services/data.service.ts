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
 
  datas$ = this.dataSubject.asObservable();
  activeCategory$ = this.activeCategorySubject.asObservable();
  // Add other methods and observables as needed
  // New BehaviorSubjects for filter criteria
  public upvotesFilterSubject = new BehaviorSubject<boolean>(false);
  public commentsFilterSubject = new BehaviorSubject<boolean>(false);

   // New Observables for filter criteria
   upvotesFilter$ = this.upvotesFilterSubject.asObservable();
   commentsFilter$ = this.commentsFilterSubject.asObservable();
  constructor() {
    this.dataSubject.next(data);
    this.activeCategorySubject.next('all');
  }

  // Move the combineLatest logic to a method in this service
  getFilteredData$(): Observable<ProductRequest[][]> {
    return combineLatest([this.datas$, this.activeCategory$,  this.upvotesFilter$,
      this.commentsFilter$]).pipe(
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
}
