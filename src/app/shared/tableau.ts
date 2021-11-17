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

    const cmeal=meal.slice();

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
    const tab=[];
    const temps=[];
    let lineK, line;
    const cmeal = meal.slice();
    for(let i=0; i<cmeal.length;i++){
      temps[i] = cmeal[i].preparationTime;
    }
    temps.sort(function(a,b){
      return a-b;
    });

    for(let i=0; i<meal.length;i++){
      line=[];
      const k=this.getIdMealbyCategory(temps[i],cmeal, 1);
      lineK=this.getLineByIdmeal(k, cmeal);
      //console.log(lineK);

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

  price=()=>{
    console.log('price');
    let cmeal=meal.slice();

    let prix=[], line=[];
    const tab=[];
    let k, lineK, tmp;

      cmeal=cmeal.map( (data, index) => (
        {...data, totalPrice:this.totalPrice(cmeal[index].preparationPrice, cmeal, cmeal.indexOf(cmeal[index]))}
      ));
    return tab;
  };

  build = (first) => {
    console.clear();
    let tab=[];
    switch(first){
      case 1:
        tab=this.name();
        break;

      case 2:
        console.log('temps');
        tab = this.time();
        break;

      case 3:
        console.log('prix total');
        tab = this.price();
        break;
    }
    return tab;
  };
}
