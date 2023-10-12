// home-left.component.ts

import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Data } from 'src/models/data.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.scss']
})
export class HomeComponent implements OnInit {
  categories: string[] = ["all", "UI", "UX", "enhancement", "feature", "Bug"];
  data: Data[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  filterItems(category: string): void {
    if (category === 'all') {
      this.loadData();
    } else {
      this.handleData(category).subscribe(
        (filteredResult) => {
          this.data = filteredResult;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }

  private loadData(): void {
    this.dataService.getData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  private handleData(category: string): Observable<Data[]> {
    return this.dataService.getData().pipe(
      switchMap((result: unknown) => {
        if (Array.isArray(result)) {
          const filteredData = (result as Data[]).filter((data: Data) =>
            data.productRequests.some(item => item.category === category)
          );
          return of(filteredData);
        } else {
          return of([]); // or any other appropriate default value
        }
      })
    );
  }
}
