import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  filtered: Data[]  = []
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Assuming you have a default status filter, modify this accordingly
    this.filtered = this.dataService.filterByStatus(this.dataService.dataSubject.value, ['planned', 'live', 'in-progress']);
  }


}
