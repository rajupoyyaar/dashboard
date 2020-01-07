import { Component, OnInit } from '@angular/core';
import {ApiEndpointService} from '../api-endpoint.service';
import {Router} from '@angular/router';
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
    toogle = false;
 
  employeeList =[];
  


  constructor(private router:Router,private serviceName:ApiEndpointService) { }

  ngOnInit() {
  }
   submit(){
     this.serviceName.getUserList().subscribe((response : any)=>{
       console.info(response)
       this.employeeList=response.data
     }, (error) => {
       console.info(error)
    })
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
    this.router.navigateByUrl('home')
  }
    onEdit(){

    }
    onDelete(index){
      this.employeeList.splice(index,1);
    }
    onClick(){
      this.toogle = !this.toogle
    }
}
