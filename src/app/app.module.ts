import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { MdToolbarModule, MdIconModule, MdButtonModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatService } from './shared/cat.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    AppRoutingModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
