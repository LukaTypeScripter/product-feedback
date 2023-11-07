import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-left/home-left.component';
import { HomeRightComponent } from './home-right/home-right.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupSortComponent } from './home-right/popup-sort/popup-sort.component';
import { FeedbackComponent } from './home-right/feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { RoadmapHeaderComponent } from './roadmap/roadmap-header/roadmap-header.component';
import { StatusCardComponent } from './roadmap/status-card/status-card.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeRightComponent,
    PopupSortComponent,
    FeedbackComponent,
    ButtonComponent,
    RoadmapComponent,
    RoadmapHeaderComponent,
    StatusCardComponent,
    FeedbackDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
