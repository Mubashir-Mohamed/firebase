import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { SignUpComponent }from "./signup/signup.component";
import { LoginComponent} from "./login/login.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./homepage/home.component";


@NgModule({
  declarations: [AppComponent,SignUpComponent,LoginComponent,HomeComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,NativeScriptFormsModule,AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
