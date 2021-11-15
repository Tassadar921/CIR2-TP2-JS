import { Component, OnInit } from '@angular/core';
import {meal} from 'src/app/data/meal-data.js';
import {ingredients} from 'src/app/data/ingredients-data.js';
import {Tableau} from 'src/app/shared/tableau';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
})
export class TableauComponent implements OnInit {

  constructor(
    private tableau: Tableau,
  )
  {}

  ngOnInit() {
    const tab = this.tableau.build(1);
    //console.log(tab);
  }

  choix = () => {
    if(document.getElementById('choix').hidden)
    {document.getElementById('choix').hidden=false;}
    else {document.getElementById('choix').hidden=true;}
  };

  choice = (cas) => this.tableau.build(cas);

}
