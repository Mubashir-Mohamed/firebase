import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import firebase=require("nativescript-plugin-firebase");
@Component({
    moduleId: module.id,
    selector:"ns-login",
    templateUrl: "login.component.html"
})
export class LoginComponent{
    input: any;
    public constructor(private router: RouterExtensions){
        this.input={
            "email":"",
            "password":""
        }
    }
    login(){
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
              email: this.input.email,
              password: this.input.password
            }
          }).then(
              function (result) {
                JSON.stringify(result);
                alert("success");
                
              },
              function (errorMessage) {
                console.log(errorMessage);
                alert("failure");
                
              }
          );
          this.router.navigate(["homepage"]);
    }
    signup(){
        this.router.navigate(["register"]);
    }
}