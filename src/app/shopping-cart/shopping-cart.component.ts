import { Component, OnInit } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';
interface productList {
  id : number;
  name : string;
  price : number;
  description : string;
};

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  product : productList = {
    id : 0,
    name : "",
    price : 0,
    description : ""
  };
  validation = {
  idError : false,
  nameError : false,
  priceError : false,
  descriptionError : false
  };
  shoppingList = [
    {
      id : 1,
      name : "mobile",
      price : 10000,
      description : "we can see the world within our palm" 
    },
    {
      id : 2,
      name : "television",
      price : 15000,
      description : "all available branded televisions are here" 
    },
    {
      id : 3,
      name : "basics",
      price : 1000,
      description : "basics shirt good to wear" 
    }
  ];
  name = "";
  tableList = [];

  constructor() { }

  ngOnInit() {
  }
  submit(){
    this.validation.idError = this.product.id == 0 ? true : false;
    this.validation.nameError = this.product.name == "" ? true : false;
    this.validation.priceError = this.product.price == 0 ? true : false;
    this.validation.descriptionError = this.product.description == "" ? true : false;
    if(this.product.id && this.product.name && this.product.price && this.product.description){
    this.shoppingList.push(this.product);
    this.product  = {
      id : 0,
      name : "",
      price : 0,
      description : ""
    };
  };
  };
  search(){
    
    this.shoppingList = this.shoppingList.filter(res=>{
       return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
  delete(shoppingId){
     this.shoppingList.splice(shoppingId,1);
    console.log(shoppingId)
  }
  add(){
    
  }
 
 }
