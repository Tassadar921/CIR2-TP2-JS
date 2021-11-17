import {ingredients} from '../../data/ingredients-data';

export class Tri {

  public local=false;
  public price=false;
  public name=false;

  sortNameDec = (a,b)=>{
    const keyA=a.name;
    const keyB=b.name;
    return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0));
  };

  sortNameInc = (a,b)=>{
    const keyA=a.name;
    const keyB=b.name;
    return ((keyA > keyB) ? -1 : ((keyA < keyB) ? 1 : 0));
  };

  sortLocalDec = (a,b)=>{
    const keyA=a.local;
    const keyB=b.local;
    return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0));
  };

  sortLocalInc=(a,b)=>{
    const keyA=a.local;
    const keyB=b.local;
    return ((keyA > keyB) ? -1 : ((keyA < keyB) ? 1 : 0));
  };

  sortPriceDec=(a,b)=>{
    const keyA=a.prix;
    const keyB=b.prix;
    return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0));
  };

  sortPriceInc=(a,b)=>{
    const keyA=a.prix;
    const keyB=b.prix;
    return ((keyA > keyB) ? -1 : ((keyA < keyB) ? 1 : 0));
  };

  sortName = () =>{
    const copy = ingredients.slice();

    if(this.name)
    {
      copy.sort(this.sortNameDec);
      this.name=false;
    }
    else
    {
      copy.sort(this.sortNameInc);
      this.name=true;
    }
    return copy;
  };

  sortPrice = () =>{
    const copy = ingredients.slice();

    if(this.price)
    {
      copy.sort(this.sortPriceDec);
      this.price=false;
    }
    else
    {
      copy.sort(this.sortPriceInc);
      this.price=true;
    }
    return copy;
  };

  sortLocal = () =>{
    const copy = ingredients.slice();

    if(this.local)
    {
      copy.sort(this.sortLocalDec);
      this.local=false;
    }
    else
    {
      copy.sort(this.sortLocalInc);
      this.local=true;
    }
    return copy;
  };

  display = () => {
    console.log('test');
  };
}
