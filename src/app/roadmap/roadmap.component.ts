import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { ProductRequest } from 'src/models/data.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  productRequests: ProductRequest[] = [];
  @Output() getStatus = new EventEmitter<{ status: string, count: number }>();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.productRequests = this.dataService
    .filterByStatus(this.dataService.dataSubject.value, ['planned', 'live', 'in-progress'])
    .flatMap((data) => data.productRequests);
  }

  getFillteredPoductData(status:string) {
    return this.productRequests.filter((product) => product.status === status);
  }
  getNumberOfStatus(status:string) {
    return this.getFillteredPoductData(status).length;
  }
}
