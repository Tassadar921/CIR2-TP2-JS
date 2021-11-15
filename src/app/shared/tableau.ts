import {OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {meal} from 'src/app/data/meal-data.js';
import {ingredients} from 'src/app/data/ingredients-data.js';

@Injectable({
  providedIn: 'root'
})

export class Tableau {

  transformIngredients =(tab)=>{
    let tmp = [];
    for(let i=0;i<tab.length;i++)
    {
        tmp[i] = ingredients[tab[i]].name;
    }
    return tmp;
  };

  totalPrice = (plat, k)=>{
    const tab = meal[k].ingredients;
    let price = Number(plat);
    //console.log(meal);
    //console.log(tab);

    for(let i=0;i<tab.length;i++) {
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

  getIdlinebyPreparationTime = (value)=>{
    let idline;
    for (const line of meal)
    {
        if(line.preparationTime==name)
        {
            idline = line.idMeal
        }
    }
    return idline
  }

  getIdlinebyTotalPrice = (value)=>{
    let idline;
    for (const line of meal)
    {
        if(line.totalPrice==name)
        {
            idline = line.idMeal;
        }
    }
    return idline;
  }


  getIdlinebyCategory=(value,category)=>{
    let result;
    switch (category) {
      case 0:
        result=this.getIdlinebyName(value);
        break;

      case 1:
        result=this.getIdlinebyPreparationTime(value);
        break;

       case 2:
        result=this.getIdlinebyTotalPrice(value);
        break;

      default:
        break;
    }
    return result;
  }

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
       const k=this.getIdlinebyCategory(nom[i],0);

       const tmp = meal[k].ingredients;

       line[0]=meal[k].name;
       line[1]=meal[k].preparationTime;
       line[3]=this.totalPrice(meal[k].preparationPrice, k);
       line[2]=this.transformIngredients(meal[k].ingredients);
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
        return this.name();
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
