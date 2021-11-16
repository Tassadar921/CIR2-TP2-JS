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

  totalPrice = (plat, cmeal, k)=>{
    const tab = cmeal[k].ingredients;
    let price = Number(plat);

    for(let i=0;i<tab.length;i++) {
       price += Number(ingredients[tab[i]].prix);
    }
    return price;
  };

  getIdlinebyName =(value, cmeal)=>
  {
    let idline;
    for (const line of cmeal)
    {
        if(line.name==value)
        {
            idline = line.idMeal;
        }
    }
    return idline;
    };

  getIdlinebyPreparationTime = (value, cmeal)=>{
    let idline;
    for (const line of cmeal)
    {
        if(line.preparationTime==value)
        {
            idline = line.idMeal
        }
    }
    return idline
  };

  getIdlinebyTotalPrice = (value, cmeal)=>{
    let idline;
    for (const line of cmeal)
    {
        if(line.totalPrice==value)
        {
            idline = line.idMeal;
        }
    }
    return idline;
  };

  getIdMealbyCategory=(value,cmeal,category)=>{
    let result;
    switch (category)
    {
      case 0:
        result=this.getIdlinebyName(value,cmeal);
        break;

      case 1:
        result=this.getIdlinebyPreparationTime(value,cmeal);
        break;

       case 2:
        result=this.getIdlinebyTotalPrice(value,cmeal);
        break;

      default:
        break;
    }
    return result;
  };

  getLineByIdmeal=(idMeal, cmeal)=>{
    let result;
    for(const line of cmeal){
      if (line.idMeal==idMeal) {
        result = line;
      }
    }
    return result;
  };

  display = (tab) =>{
    console.log('**************** Nouvel affichage ****************');
    for(let i=0;i<tab.length;i++)
    {
      console.log(tab[i]);
    }
  };

  name =()=>{
     const cmeal=meal;
     let nom=[], line=[];
     const tab=[];
     let k, lineK;

     for(let i=0;i<cmeal.length;i++)
     {
       nom[i] = cmeal[i].name;
     }

     nom=nom.sort();

     for(let i=0;i<nom.length;i++)
     {
       line=[];
       k=this.getIdMealbyCategory(nom[i],cmeal, 0);
       lineK=this.getLineByIdmeal(k, cmeal);

         line[0] = lineK.name;
         line[1] = lineK.preparationTime;
         line[3] = this.totalPrice(lineK.preparationPrice, cmeal, cmeal.indexOf(lineK));
         line[2] = this.transformIngredients(lineK.ingredients);

       cmeal.splice(cmeal.indexOf(lineK),1);
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

  price=()=>{
    console.log('price');
    const cmeal=meal;
    let prix=[], line=[];
    const tab=[];
    let k, lineK;

    for(let i=0;i<cmeal.length;i++)
    {
      prix[i] = cmeal[i].preparationPrice;
    }

    prix=prix.sort();

    for(let i=0;i<prix.length;i++)
    {
      line=[];
      k=this.getIdMealbyCategory(prix[i],cmeal, 2);
      lineK=this.getLineByIdmeal(k, cmeal);

      line[0] = lineK.name;
      line[1] = lineK.preparationTime;
      line[3] = this.totalPrice(lineK.preparationPrice, cmeal, cmeal.indexOf(lineK));
      line[2] = this.transformIngredients(lineK.ingredients);

      cmeal.splice(cmeal.indexOf(lineK),1);
      tab.push(line);
    }
    tab.unshift(['Coût total (€)', 'Temps de préparation (min)', 'Ingrédients', 'Nom du plat']);
    this.display(tab);
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
        tab = this.price();
        break;
    }
  }
}
