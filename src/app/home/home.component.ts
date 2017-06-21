import { Component, OnInit } from '@angular/core';

import { CatService } from "../shared/cat.service";
import { Cat } from "../shared/cat";

@Component({
  selector: 'apd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cats: Cat[];
  loadingList: boolean = false;

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.loadCats();
  }

  private loadCats(): void {
    this.loadingList = true;
    this.catService.getCats()
      .subscribe((cats) => {
        this.cats = cats;
      }, (error) => {
        console.log(error);
      }, () => {
        this.loadingList = false;
      });
  }

  private getPictureURL(location: string): string {
    return `url(${location})`;
  }
}
