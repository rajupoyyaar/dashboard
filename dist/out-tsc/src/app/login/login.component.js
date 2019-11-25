import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor() {
        this.loginForm = {
            name: '',
            dob: '',
            designation: '',
            location: ''
        };
        this.validation = {
            nameError: false,
            dobError: false,
            designationError: false,
            locationError: false,
        };
        this.employeeList = [];
    }
    ngOnInit() {
    }
    submit() {
        this.validation.nameError = this.loginForm.name == '' ? true : false;
        this.validation.dobError = this.loginForm.dob == '' ? true : false;
        this.validation.designationError = this.loginForm.designation == '' ? true : false;
        this.validation.locationError = this.loginForm.location == '' ? true : false;
        this.employeeList.push(this.loginform);
        this.loginForm;
        loginformList = {
            name: '',
            dob: '',
            designation: '',
            location: ''
        };
    }
    onEdit() {
    }
    onDelete(index) {
        this.employeeList.splice(index, 1);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map