import { Component, OnInit } from '@angular/core';
interface productFormList {
  productId : number;
  productName : string;
  productPrice : number;
  productDescription : string;
};
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  productForm : productFormList = {
    productId : 0,
    productName : "",
    productPrice : 0,
    productDescription : ""
  };
  productValidation = {
    id : false,
    name : false,
    price : false,
    description : false
  };
  availableProducts = [];
   productName = "";

  constructor() { }

  ngOnInit() {
  }
  addProduct(){
    this.productValidation.id = this.productForm.productId == 0 ? true : false;
    this.productValidation.name = this.productForm.productName == "" ? true : false;
    this.productValidation.price = this.productForm.productPrice == 0 ? true : false;
    this.productValidation.description = this.productForm.productDescription == "" ? true : false;
    if(!this.productValidation.id && !this.productValidation.name && !this.productValidation.price && !this.productValidation.description){                 
    this.availableProducts.push(this.productForm);
    this.productForm  = {
      productId : 0,
      productName : "",
      productPrice : 0,
      productDescription : ""
    };
  };
  };
  onDelete(index){
    this.availableProducts.splice(index,1);
  };
  search(){
    
    this.availableProducts = this.availableProducts.filter(res=>{
       return res.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());
    });
  }; 
  
  sortBy(obj, p) {
    return obj.slice(0).sort(function(a,b) {
      return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0
    })
  };
    
  lowPrice(){
    this.availableProducts = this.sortBy(this.availableProducts, 'productPrice');
    console.info(this.sortBy(this.availableProducts, 'productPrice'))
  }

    highPrice(){
    let high = this.sortBy(this.availableProducts, 'productPrice');
    this.availableProducts  = high.reverse();

  }
  


}
