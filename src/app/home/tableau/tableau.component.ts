import { Component, OnInit } from '@angular/core';
import {Tableau} from '../../shared/tableau';
import {meal} from '../../data/meal-data';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
})
export class TableauComponent implements OnInit {

  public tab = [];

  constructor(
    private tableau: Tableau,
  )
  {}

  ngOnInit() {
    this.tableau.switchName=0;
    this.tableau.switchTime=0;
    this.tableau.switchPrice=0;
    this.tab=this.tableau.build(1);
  }

  choice = (cas) => {
    console.clear();
    this.tab=this.tableau.build(cas);
    //this.display(this.tab);

  };

  display = (tab) =>{
    console.log('**************** Nouvel affichage ****************');
    for(let i=0;i<tab.length;i++)
    {
      console.log(tab[i]);
    }
  };
}
