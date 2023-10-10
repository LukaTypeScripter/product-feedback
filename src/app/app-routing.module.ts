import { NgModule,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Data } from 'src/models/data.model';
import { DataService } from 'src/services/data.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {

 }
