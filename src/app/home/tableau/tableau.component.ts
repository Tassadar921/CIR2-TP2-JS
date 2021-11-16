import { Component, OnInit } from '@angular/core';
import {Tableau} from '../../shared/tableau';
import {HomePage} from '../home.page';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
})
export class TableauComponent implements OnInit {

  constructor(
    private home: HomePage,
  )
  {}

  ngOnInit() {}

  choix = () => {
    if(document.getElementById('choix').hidden)
    {document.getElementById('choix').hidden=false;}
    else {document.getElementById('choix').hidden=true;}
  };

  choice = (cas) => this.home.display(cas);

}
