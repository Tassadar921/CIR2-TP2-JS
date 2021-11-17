import { Component, OnInit } from '@angular/core';
import {Tableau} from '../../shared/tableau/tableau';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
})

export class TableauComponent implements OnInit {

  public tab = [];
  public name=0;
  public time=0;
  public price=0;

  constructor(
    private tableau: Tableau,
  )
  {}

  ngOnInit() {
    this.name=1;

    this.tableau.switchName=1;
    this.tableau.switchPrice=0;
    this.tableau.switchTime=0;
    this.tab=this.tableau.build(1);
  }

  choice = (cas) => {
    console.clear();
    this.tab=this.tableau.build(cas);

    switch(cas)
    {

      case 1:
        if(this.name==2) {this.name=1;}
        else {this.name+=1;}
        this.time=0;
        this.price=0;
        break;

      case 2:
        this.name=0;
        if(this.time==2) {this.time=1;}
        else {this.time+=1;}
        this.price=0;
        break;

      case 3:
        this.name=0;
        this.time=0;
        if(this.price==2) {this.price=1;}
        else {this.price+=1;}
        break;
    }

  };
}
