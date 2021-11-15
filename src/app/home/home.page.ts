import { Component } from '@angular/core';
import {meal} from '../data/meal-data.js';
import {ingredients} from '../data/ingredients-data.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit()
  {
    document.getElementById('choix').hidden=true;
  }
}
