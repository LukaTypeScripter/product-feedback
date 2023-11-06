import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, filter, map, mergeMap, of, reduce, toArray } from 'rxjs';
import { Data, ProductRequest } from 'src/models/data.model';
import { data } from 'src/app/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public dataSubject = new BehaviorSubject<Data[]>([]);
  private activeCategorySubject = new BehaviorSubject<string>('all');

  datas$ = this.dataSubject.asObservable();
  activeCategory$ = this.activeCategorySubject.asObservable();

  public upvotesFilterSubject = new BehaviorSubject<boolean>(false);
  public commentsFilterSubject = new BehaviorSubject<boolean>(false);
   upvotesFilter$ = this.upvotesFilterSubject.asObservable();
   commentsFilter$ = this.commentsFilterSubject.asObservable();
    productRequests: ProductRequest[] = [];
  constructor() {
    this.dataSubject.next(data);
    this.activeCategorySubject.next('all');
    this.getProducts()
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
  //for comments filltring
  sortData(data: ProductRequest[][], sortBy: string): ProductRequest[][] {
    switch (sortBy) {
      case 'Most Comments':
        return data.map(innerArray => innerArray.sort((a, b) => (a.comments.length < b.comments.length ? 1 : -1)));
      case 'Most Upvotes':
        return data.map(innerArray => innerArray.sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1)));
      case 'Least Upvotes':
        return data.map(innerArray => innerArray.sort((a, b) => (a.upvotes > b.upvotes ? 1 : -1)));
      case 'Least Comments':
        return data.map(innerArray => innerArray.sort((a, b) => (a.comments.length > b.comments.length ? 1 : -1)));
      default:
        return data;
    }
  }
  setActiveCategory(category: string): void {
    this.activeCategorySubject.next(category);
  }
  filterByStatus(data: Data[], statuses: string[]): Data[] {
    return data.map(item => ({
      ...item,
      productRequests: item.productRequests.filter(request => statuses.includes(request.status.toLowerCase()))
    }));
  }
  toggleUpvotes(productId:number):void {
    const updatedData = this.dataSubject.getValue().map((data) => {
      const updatedProductsRequests = data.productRequests.map((req) => {
        if(req.id === productId) {
          if(req.upvoted) {
            req.upvotes--;
          }else {
            req.upvotes++;
          }
          req.upvoted = !req.upvoted
        }
        return req
      })
      return {
        ...data,
        productRequests: updatedProductsRequests
      }
    })
    this.dataSubject.next(updatedData);
  }

  getNumberOfStatus(status: string, productRequests: ProductRequest[]): number {
    return productRequests.filter((product) => product.status === status).length;
  }

  getProducts() {
      this.productRequests = this.filterByStatus(this.dataSubject.value, ['planned', 'live', 'in-progress'])
          .flatMap((data) => data.productRequests);
  }
}
