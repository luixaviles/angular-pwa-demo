import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdCardModule,
         MdProgressBarModule } from "@angular/material";

import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
    MdCardModule,
    MdProgressBarModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
