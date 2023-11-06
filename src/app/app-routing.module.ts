import { NgModule,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-left/home-left.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: 'roadmap',
    component: RoadmapComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {

 }
