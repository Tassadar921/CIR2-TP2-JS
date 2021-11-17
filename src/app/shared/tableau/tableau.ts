import {Injectable} from '@angular/core';
import {meal} from 'src/app/data/meal-data.js';
import {ingredients} from 'src/app/data/ingredients-data.js';

@Injectable({
  providedIn: 'root'
})

export class Tableau {

  public switchName;
  public switchTime;
  public switchPrice;

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
        if(line.total==value)
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

       if(this.switchName==1) {
         k = this.getIdMealbyCategory(nom[i], cmeal, 0);
       }
       else{
         k = this.getIdMealbyCategory(nom[nom.length-i-1], cmeal, 0);
       }

       lineK=this.getLineByIdmeal(k, cmeal);

         line[0] = lineK.name;
         line[1] = lineK.preparationTime;
         line[3] = this.totalPrice(lineK.preparationPrice, cmeal, cmeal.indexOf(lineK));
         line[2] = this.transformIngredients(lineK.ingredients);
       cmeal.splice(cmeal.indexOf(lineK),1);
       tab.push(line);
     }
    if(this.switchName==0) {
      this.switchName=1;
      this.switchTime=0;
      this.switchPrice=0;
    }
    else{this.switchName=0;}

     return tab;
  };

  time=()=>{
    const tab=[];
    const temps=[];
    let line=[];
    let lineK, k;

    const cmeal = meal.slice();

    for(let i=0; i<cmeal.length;i++){
      temps[i] = cmeal[i].preparationTime;
    }
    temps.sort(function(a,b){
      return a-b;
    });

    for(let i=0; i<meal.length;i++){
      line=[];

      if(this.switchTime==0) {
        k = this.getIdMealbyCategory(temps[i], cmeal, 1);
      }
      else{
        k = this.getIdMealbyCategory(temps[temps.length-i-1], cmeal, 1);
      }

      lineK=this.getLineByIdmeal(k, cmeal);

      line[0] = lineK.name;
      line[1] = lineK.preparationTime;
      line[3] = this.totalPrice(lineK.preparationPrice, cmeal, cmeal.indexOf(lineK));
      line[2] = this.transformIngredients(lineK.ingredients);
      cmeal.splice(cmeal.indexOf(lineK),1);
      tab.push(line);
    }
    if(this.switchTime==0) {
      this.switchName=0;
      this.switchTime=1;
      this.switchPrice=0;
    }
    else{this.switchTime=0;}

    return tab;
  };

  price=()=>{
    const tab=[];
    const price=[];
    let line=[];
    let lineK, k;

    let cmeal = meal.slice();

    cmeal=cmeal.map( (data, index) => (
      {...data, total:this.totalPrice(cmeal[index].preparationPrice, cmeal, cmeal.indexOf(cmeal[index]))}
    ));

    for(let i=0; i<cmeal.length;i++){
      price[i] = cmeal[i].total;
    }

    price.sort(function(a,b){
      return a-b;
    });

    for(let i=0; i<meal.length;i++){
      line=[];

      if(this.switchPrice==0) {
        k = this.getIdMealbyCategory(price[i], cmeal, 2);
      }
      else{
        k = this.getIdMealbyCategory(price[price.length-i-1], cmeal, 2);
      }

      lineK=this.getLineByIdmeal(k, cmeal);

      line[0] = lineK.name;
      line[1] = lineK.preparationTime;
      line[3] = this.totalPrice(lineK.preparationPrice, cmeal, cmeal.indexOf(lineK));
      line[2] = this.transformIngredients(lineK.ingredients);
      cmeal.splice(cmeal.indexOf(lineK),1);
      tab.push(line);
    }
    if(this.switchPrice==0) {
      this.switchName=0;
      this.switchTime=0;
      this.switchPrice=1;
    }
    else{this.switchPrice=0;}

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
        tab = this.time();
        break;

      case 3:
        tab = this.price();
        break;
    }
    return tab;
  };
}
