import { Component, OnInit } from '@angular/core';
interface loginformList{
  name:string;
  dob:string;
  designation:string;
  location:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm : loginformList ={
   name:'',
   dob:'',
   designation:'',
   location:''
  }
  validation ={
    nameError: false,
    dobError: false,
    designationError: false,
    locationError: false,
    
  };
 
  employeeList =[];
  


  constructor() { }

  ngOnInit() {
  }
   submit(){
    

    this.validation.nameError = this.loginForm.name == '' ? true : false;
    this.validation.dobError = this.loginForm.dob == '' ? true : false;
    this.validation.designationError = this.loginForm.designation == '' ? true : false;
    this.validation.locationError = this.loginForm.location == '' ? true : false;
    if(!this.validation.nameError && !this.validation.dobError && !this.validation.locationError && !this.validation.designationError){
        this.employeeList.push(this.loginForm);
        this.loginForm ={
          name:'',
          dob:'',
          designation:'',
          location:''
        };
    }
    }
    onEdit(){

    }
    onDelete(index){
      this.employeeList.splice(index,1);
    }









  }
