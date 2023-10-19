import { Component, OnInit,OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Data, ProductRequest } from 'src/models/data.model';
import { data } from '../data';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  categories: string[] = ["all", "UI", "UX", "enhancement", "feature", "Bug"];
  sidebarOpen: boolean = false;
  filteredData$: Observable<ProductRequest[][]>;
  sidebarOpen$!: Observable<boolean>;
  activeCategory$!: Observable<string>;
  private destroy$ = new Subject<void>();
  constructor(private dataService: DataService) {
    this.filteredData$ = this.dataService.getFilteredData$();
  }

  ngOnInit() {
    this.filteredData$ = this.dataService.getFilteredData$();
    this.filteredData$.subscribe(filteredData => {
      takeUntil(this.destroy$)
    });
    this.activeCategory$ = this.dataService.activeCategory$;
  }

filterItems(category: string): void {
  this.dataService.setActiveCategory(category);
}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
