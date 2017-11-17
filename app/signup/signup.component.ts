import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import firebase=require("nativescript-plugin-firebase");
@Component({
    moduleId: module.id,
    selector:"ns-register",
    templateUrl: "signup.component.html"
})
export class SignUpComponent{
    input: any;
    public constructor(private router: RouterExtensions){
        this.input= {
            "firstname":"",
            "lastname":"",
            "email":"",
            "password":""

        }
    }
signup(){
    firebase.createUser({
        email: this.input.email,
        password:this.input.password
      }).then(
          function (result) {
            alert({
              title: "User created",
              message: "userid: " + result.key,
              okButtonText: "Nice!"
            })
          },
          function (errorMessage) {
            alert({
              title: "No user created",
              message: errorMessage,
              okButtonText: "OK, got it"
            })
          }
      );
      firebase.push(
        '/users',
        {
          'firstname': this.input.firstname,
          'lastname': this.input.lastname,
          'email':this.input.email,
          'password': this.input.password
        }
    ).then(
        function (result) {
           
        }
    );
}
login(){
    this.router.navigate(["login"])
}
}



  