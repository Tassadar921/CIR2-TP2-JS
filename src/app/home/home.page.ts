import { Component } from '@angular/core';
import {Tableau} from '../shared/tableau';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tab;

  constructor(
    private tableau: Tableau
  ) {}

  ngOnInit()
  {
    document.getElementById('choix').hidden=true;
    this.tab=this.tableau.build(1);
  }
}
