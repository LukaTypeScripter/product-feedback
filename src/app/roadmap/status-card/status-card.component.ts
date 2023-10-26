import { Component, Input, OnInit } from '@angular/core';
import { ProductRequest } from 'src/models/data.model';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {
  @Input() planned: ProductRequest | undefined;
  ngOnInit(): void {

  }
}
