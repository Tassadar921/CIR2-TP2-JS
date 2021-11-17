import { Component, OnInit } from '@angular/core';
import {ingredients} from '../../data/ingredients-data';
import {TriIngredients} from '../../shared/ingredients/tri-ingredients';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {

  public ingr=ingredients;
  constructor(
    private tri = TriIngredients,
  ) {}

  ngOnInit() {
    this.ing();
  }

  ing = () => {
    let ingr = document.getElementById('ingr')
    if(ingr.style.display=='none'){ingr.style.display='block';}
    else {ingr.style.display='none';}
  };

  choice = (cas) =>{
    switch(cas){
      case 1:
        this.ingr=this.tri.
    }
  };

  }
