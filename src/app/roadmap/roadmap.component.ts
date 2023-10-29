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
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.productRequests = this.dataService.productRequests
  }


  getNumberOfStatus(status:string) {
    return this.dataService.getNumberOfStatus(status,this.productRequests)
  }
}
