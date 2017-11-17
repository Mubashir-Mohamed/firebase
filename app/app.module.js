"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var signup_component_1 = require("./signup/signup.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./homepage/home.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, signup_component_1.SignUpComponent, login_component_1.LoginComponent, home_component_1.HomeComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule, forms_1.NativeScriptFormsModule, app_routing_1.AppRoutingModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFvRTtBQUNwRSxpREFBK0M7QUFDL0MsNkNBQWlEO0FBQ2pELDhEQUEyRDtBQUMzRCwyREFBd0Q7QUFFeEQsNERBQTBEO0FBVTFEO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFQckIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQVksRUFBQyxrQ0FBZSxFQUFDLGdDQUFjLEVBQUMsOEJBQWEsQ0FBQztZQUN6RSxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFDLCtCQUF1QixFQUFDLDhCQUFnQjthQUNwRTtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBTaWduVXBDb21wb25lbnQgfWZyb20gXCIuL3NpZ251cC9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZXBhZ2UvaG9tZS5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsU2lnblVwQ29tcG9uZW50LExvZ2luQ29tcG9uZW50LEhvbWVDb21wb25lbnRdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLEFwcFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==