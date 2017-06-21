import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from "@angular/material";
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AboutComponent },
    ]),
    MdCardModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
