import { Component, Input, OnInit } from '@angular/core';
import { ProductRequest } from 'src/models/data.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {
  @Input() planned: ProductRequest | undefined;
  ngOnInit(): void {
    console.log(this.planned?.id);
    
  }
  constructor(private dataService: DataService) { }
  upVoteOnClick(productId: number): void {
    this.dataService.toggleUpvotes(productId);
  }
}
