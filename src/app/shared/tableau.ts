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
    //console.log('totalPrice', cmeal[k]);
    //console.log('totalPrice k :', k)
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
    //console.log('on recherche', value, 'dans', cmeal);
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

  getIdlinebyNbrIngredients = (value, cmeal)=>{

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

      case 3:
        result=this.getIdlinebyNbrIngredients(value,cmeal);
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
     //this.display(cmeal);
     let nom=[], line=[];
     const tab=[];
     let k, lineK;

     for(let i=0;i<cmeal.length;i++)
     {
       nom[i] = cmeal[i].name;
     }

     nom=nom.sort();
     //console.log('nom : ', nom);

     for(let i=0;i<nom.length;i++)
     {
       line=[];
       //console.log('a', nom[i]);
       //this.display(cmeal);
       k=this.getIdMealbyCategory(nom[i],cmeal, 0);
       //console.log('k :', k);
       lineK=this.getLineByIdmeal(k, cmeal);
        //console.log(lineK);

         line[0] = lineK.name;
         line[1] = lineK.preparationTime;
         line[3] = this.totalPrice(lineK.preparationPrice, cmeal, cmeal.indexOf(lineK));
         //console.log('lineK:', lineK);
         line[2] = this.transformIngredients(lineK.ingredients);

       //console.log('On delete',cmeal[k]);
       //console.log('on delete', lineK, 'd\'indice', cmeal.indexOf(lineK));
       cmeal.splice(cmeal.indexOf(lineK),1);
       //this.display(cmeal);
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
