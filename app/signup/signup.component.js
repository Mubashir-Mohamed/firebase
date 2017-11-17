"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var SignUpComponent = (function () {
    function SignUpComponent(router) {
        this.router = router;
        this.input = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": ""
        };
    }
    SignUpComponent.prototype.signup = function () {
        firebase.createUser({
            email: this.input.email,
            password: this.input.password
        }).then(function (result) {
            alert({
                title: "User created",
                message: "userid: " + result.key,
                okButtonText: "Nice!"
            });
        }, function (errorMessage) {
            alert({
                title: "No user created",
                message: errorMessage,
                okButtonText: "OK, got it"
            });
        });
        firebase.push('/users', {
            'firstname': this.input.firstname,
            'lastname': this.input.lastname,
            'email': this.input.email,
            'password': this.input.password
        }).then(function (result) {
        });
    };
    SignUpComponent.prototype.login = function () {
        this.router.navigate(["login"]);
    };
    SignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-register",
            templateUrl: "signup.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQStEO0FBRS9ELHVEQUF3RDtBQU14RDtJQUVJLHlCQUEyQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFFO1lBQ1IsV0FBVyxFQUFDLEVBQUU7WUFDZCxVQUFVLEVBQUMsRUFBRTtZQUNiLE9BQU8sRUFBQyxFQUFFO1lBQ1YsVUFBVSxFQUFDLEVBQUU7U0FFaEIsQ0FBQTtJQUNMLENBQUM7SUFDTCxnQ0FBTSxHQUFOO1FBQ0ksUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3ZCLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLE1BQU07WUFDZCxLQUFLLENBQUM7Z0JBQ0osS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUc7Z0JBQ2hDLFlBQVksRUFBRSxPQUFPO2FBQ3RCLENBQUMsQ0FBQTtRQUNKLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDcEIsS0FBSyxDQUFDO2dCQUNKLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixZQUFZLEVBQUUsWUFBWTthQUMzQixDQUFDLENBQUE7UUFDSixDQUFDLENBQ0osQ0FBQztRQUNGLFFBQVEsQ0FBQyxJQUFJLENBQ1gsUUFBUSxFQUNSO1lBQ0UsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztZQUNqQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQy9CLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDeEIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtTQUNoQyxDQUNKLENBQUMsSUFBSSxDQUNGLFVBQVUsTUFBTTtRQUVoQixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDRCwrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUEvQ1ksZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBQyxhQUFhO1lBQ3RCLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FHcUMseUJBQWdCO09BRjFDLGVBQWUsQ0FnRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgZmlyZWJhc2U9cmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOlwibnMtcmVnaXN0ZXJcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJzaWdudXAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnR7XG4gICAgaW5wdXQ6IGFueTtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpe1xuICAgICAgICB0aGlzLmlucHV0PSB7XG4gICAgICAgICAgICBcImZpcnN0bmFtZVwiOlwiXCIsXG4gICAgICAgICAgICBcImxhc3RuYW1lXCI6XCJcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjpcIlwiLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOlwiXCJcblxuICAgICAgICB9XG4gICAgfVxuc2lnbnVwKCl7XG4gICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XG4gICAgICAgIGVtYWlsOiB0aGlzLmlucHV0LmVtYWlsLFxuICAgICAgICBwYXNzd29yZDp0aGlzLmlucHV0LnBhc3N3b3JkXG4gICAgICB9KS50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBjcmVhdGVkXCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwidXNlcmlkOiBcIiArIHJlc3VsdC5rZXksXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJOaWNlIVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICB0aXRsZTogXCJObyB1c2VyIGNyZWF0ZWRcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0ssIGdvdCBpdFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICk7XG4gICAgICBmaXJlYmFzZS5wdXNoKFxuICAgICAgICAnL3VzZXJzJyxcbiAgICAgICAge1xuICAgICAgICAgICdmaXJzdG5hbWUnOiB0aGlzLmlucHV0LmZpcnN0bmFtZSxcbiAgICAgICAgICAnbGFzdG5hbWUnOiB0aGlzLmlucHV0Lmxhc3RuYW1lLFxuICAgICAgICAgICdlbWFpbCc6dGhpcy5pbnB1dC5lbWFpbCxcbiAgICAgICAgICAncGFzc3dvcmQnOiB0aGlzLmlucHV0LnBhc3N3b3JkXG4gICAgICAgIH1cbiAgICApLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICApO1xufVxubG9naW4oKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJsb2dpblwiXSlcbn1cbn1cblxuXG5cbiAgIl19