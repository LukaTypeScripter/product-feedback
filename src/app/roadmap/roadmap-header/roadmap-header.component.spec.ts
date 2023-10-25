import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapHeaderComponent } from './roadmap-header.component';

describe('RoadmapHeaderComponent', () => {
  let component: RoadmapHeaderComponent;
  let fixture: ComponentFixture<RoadmapHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadmapHeaderComponent]
    });
    fixture = TestBed.createComponent(RoadmapHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
