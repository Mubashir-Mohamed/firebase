"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.input = {
            "email": "",
            "password": ""
        };
    }
    LoginComponent.prototype.login = function () {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.input.email,
                password: this.input.password
            }
        }).then(function (result) {
            JSON.stringify(result);
            alert("success");
        }, function (errorMessage) {
            console.log(errorMessage);
            alert("failure");
        });
        this.router.navigate(["homepage"]);
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate(["register"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-login",
            templateUrl: "login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUUvRCx1REFBd0Q7QUFNeEQ7SUFFSSx3QkFBMkIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBQztZQUNQLE9BQU8sRUFBQyxFQUFFO1lBQ1YsVUFBVSxFQUFDLEVBQUU7U0FDaEIsQ0FBQTtJQUNMLENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDOUI7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsTUFBTTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5CLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbkIsQ0FBQyxDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQS9CUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFDLFVBQVU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQUdxQyx5QkFBZ0I7T0FGMUMsY0FBYyxDQWdDMUI7SUFBRCxxQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCBmaXJlYmFzZT1yZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6XCJucy1sb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnR7XG4gICAgaW5wdXQ6IGFueTtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpe1xuICAgICAgICB0aGlzLmlucHV0PXtcbiAgICAgICAgICAgIFwiZW1haWxcIjpcIlwiLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOlwiXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2dpbigpe1xuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgZW1haWw6IHRoaXMuaW5wdXQuZW1haWwsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmlucHV0LnBhc3N3b3JkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBhbGVydChcImZhaWx1cmVcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVwYWdlXCJdKTtcbiAgICB9XG4gICAgc2lnbnVwKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInJlZ2lzdGVyXCJdKTtcbiAgICB9XG59Il19