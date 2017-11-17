import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import firebase=require("nativescript-plugin-firebase");

@Component({
    moduleId: module.id,
    selector:"ns-home",
    templateUrl: "home.component.html"
})
export class HomeComponent{
    item: any;
    public constructor (private router: RouterExtensions){}
    add(){
        firebase.push(
            '/items',
            {
              'item': this.item,
              
            }
        ).then(
            function (result) {
               
            }
        );
    }

    logout(){ 
        firebase.logout();
        this.router.navigate(["login"]);
    }
}