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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeRightComponent,
    PopupSortComponent,
    FeedbackComponent,
    ButtonComponent,
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
