import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from "@angular/material";

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
