import { Component, OnInit } from '@angular/core';

import { CatService } from "./shared/cat.service";
import { Cat } from "./shared/cat";

@Component({
  selector: 'apd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private cats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.loadCats();
  }

  private loadCats(): void {
    this.catService.getCats().subscribe((cats) => {
      console.log('Getting cats as', cats);
      this.cats = cats;
    });
  }
}
