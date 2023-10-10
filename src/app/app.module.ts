import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-left/home-left.component';
import { HomeRightComponent } from './home-right/home-right.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupSortComponent } from './home-right/popup-sort/popup-sort.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeRightComponent,
    PopupSortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
