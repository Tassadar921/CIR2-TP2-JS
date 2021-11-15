import {OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {meal} from 'src/app/data/meal-data.js';
import {ingredients} from 'src/app/data/ingredients-data.js';

@Injectable({
  providedIn: 'root'
})

export class Tableau {

  transformIngredients =(tab)=>{
    //console.log(tab);
    for(let i=0;i<tab.length;i++)
    {
        //tab[i] = ingredients[tab[i]].name;
    }
    return tab;
  };

  totalPrice = (plat, k)=>{
    const tab = meal[k].ingredients;
    let price = Number(plat);
    //console.log(meal);
    //console.log(tab);

    for(let i=0;i<tab.length;i++) {
      console.log(ingredients[tab[i]]);
       price += Number(ingredients[tab[i]].prix);
    }
    return price;
  };

  getIdlinebyName =(name)=>
  {
    let idline;
    for (const line of meal)
    {
        if(line.name==name)
        {
            idline = line.idMeal;
        }
    }
    return idline;
    };

  name =()=>{

     let nom=[];
     let line=[];
     let tab=[];

     for(let i=0;i<meal.length;i++) {
       nom[i] = meal[i].name;
     }

     nom=nom.sort();
     for(let i=0;i<nom.length;i++)
     {
       line=[];

       const k=this.getIdlinebyName(nom[i]);
       const tmp = meal[k].ingredients;

       //console.log(1, meal);
       line[0]=meal[k].name;
       //console.log(2, meal);
       line[1]=meal[k].preparationTime;
       //console.log(3, meal);
       line[3]=this.totalPrice(meal[k].preparationPrice, k);
       //console.log(4, meal);
       line[2]=this.transformIngredients(meal[k].ingredients);
       //console.log(5, meal);
       tab.push(line);
     }
     console.log(tab);
     return tab;
  };


  ingr=()=>{
    let tab=[];
    return tab;
  };

  time=()=>{
    let tab=[];
    return tab;
  };

  price=()=>{
    let tab=[];
    return tab;
  };

  build = (first) => {
    console.clear();
    let tab=[];

    switch(first){
      case 1:
        tab = this.name();
        break;

      case 2:
          tab = this.ingr();
        break;

      case 3:
          tab = this.time();
        break;

      case 4:
          tab = this.price();
        break;
    }
  }
}
