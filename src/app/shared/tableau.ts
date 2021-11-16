import {Injectable} from '@angular/core';
import {meal} from 'src/app/data/meal-data.js';
import {ingredients} from 'src/app/data/ingredients-data.js';

@Injectable({
  providedIn: 'root'
})

export class Tableau {

  transformIngredients =(tab)=>{
    const tmp = [];
    for(let i=0;i<tab.length;i++)
    {
        tmp[i] = ingredients[tab[i]].name;
    }
    return tmp;
  };

  totalPrice = (plat, k)=>{
    const tab = meal[k].ingredients;
    let price = Number(plat);

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
  };

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
  };

  getIdlinebyNbrIngredients = (value)=>{

  };


  getIdlinebyCategory=(value,category)=>{
    let result;
    switch (category)
    {
      case 0:
        result=this.getIdlinebyName(value);
        break;

      case 1:
        result=this.getIdlinebyPreparationTime(value);
        break;

       case 2:
        result=this.getIdlinebyTotalPrice(value);
        break;

      case 3:
        result=this.getIdlinebyNbrIngredients(value);
        break;

      default:
        break;
    }
    return result;
  };

  name =()=>{
     let cmeal=meal;
     let nom=[];
     let line=[];
     let tab=[];

     for(let i=0;i<cmeal.length;i++)
     {
       nom[i] = cmeal[i].name;
     }

     nom=nom.sort();
     for(let i=0;i<nom.length;i++)
     {
       line=[];
       const k=this.getIdlinebyCategory(nom[i],0);

       const tmp = cmeal[k].ingredients;

       line[0]=cmeal[k].name;
       line[1]=cmeal[k].preparationTime;
       line[3]=this.totalPrice(cmeal[k].preparationPrice, k);
       line[2]=this.transformIngredients(cmeal[k].ingredients);
       tab.push(line);
     }
     tab.unshift(['Nom du plat', 'Temps de préparation (min)', 'Ingrédients', 'Coût total (€)']);
     return tab;
  };

  time=()=>{
    let tab=[];
    let line=[];
    return tab;
  };

  ingr=()=>{
    let tab=[];
    let line=[];
    let nbrIngr=[];

    for(let i=0;i<meal.length;i++)
    {
      nbrIngr[i]=meal[i].ingredients.length;
    }
    console.log(nbrIngr);
    return tab;
  };

  price=()=>{
    let tab=[];
    let line=[];
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
        tab = this.time();
        break;

      case 3:
        tab = this.ingr();
        break;

      case 4:
        tab = this.price();
        break;
    }
  }
}
