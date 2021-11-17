import { Component, OnInit } from '@angular/core';
import {ingredients} from '../../data/ingredients-data';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})

export class IngredientsComponent implements OnInit {

  public ingr=ingredients;

  constructor() {}

  ngOnInit() {
    this.ing();
  }

  ing = () => {
    const ingr = document.getElementById('ingr');
    if(ingr.style.display ==='none'){ingr.style.display='block';}
    else {ingr.style.display='none';}
  };

  choice = (cas) => {
    console.log('On voulait faire un tri en fonction de ce sur quoi on clique comme le tableau des recettes mais vu ');
    console.log('l\'heure on va s\'arrêter là le code est dans la class tri si vous voulez y jeter un coup d\'oeil on');
    console.log(('a de gros problèmes d\'intégration de la page et Nicolas vient de me dire que c\'est pas une classe dont j\'ai besoin'));
  };
}
