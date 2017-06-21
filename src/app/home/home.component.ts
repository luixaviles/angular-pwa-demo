import { Component, OnInit } from '@angular/core';

import { CatService } from "../shared/cat.service";
import { Cat } from "../shared/cat";

@Component({
  selector: 'apd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private cats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.loadCats();
  }

  private loadCats(): void {
    this.catService.getCats().subscribe((cats) => {
      console.log('Using cats', cats);
      this.cats = cats;
    });
  }

  private getPictureURL(location: string): string {
    return `url(${location})`;
  }
}
