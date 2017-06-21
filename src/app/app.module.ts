import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { MdToolbarModule,
         MdIconModule,
         MdButtonModule,
         MdCardModule,
         MdProgressBarModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatService } from './shared/cat.service';
import { HomeComponent } from './home/home.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdProgressBarModule,
    AppRoutingModule,
    AboutModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
