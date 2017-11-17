"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.add = function () {
        firebase.push('/items', {
            'item': this.item,
        }).then(function (result) {
        });
    };
    HomeComponent.prototype.logout = function () {
        firebase.logout();
        this.router.navigate(["login"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-home",
            templateUrl: "home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFDL0QsdURBQXdEO0FBT3hEO0lBRUksdUJBQTRCLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUUsQ0FBQztJQUN2RCwyQkFBRyxHQUFIO1FBQ0ksUUFBUSxDQUFDLElBQUksQ0FDVCxRQUFRLEVBQ1I7WUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FFbEIsQ0FDSixDQUFDLElBQUksQ0FDRixVQUFVLE1BQU07UUFFaEIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQXBCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFDLFNBQVM7WUFDbEIsV0FBVyxFQUFFLHFCQUFxQjtTQUNyQyxDQUFDO3lDQUdzQyx5QkFBZ0I7T0FGM0MsYUFBYSxDQXFCekI7SUFBRCxvQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgZmlyZWJhc2U9cmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6XCJucy1ob21lXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnR7XG4gICAgaXRlbTogYW55O1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpe31cbiAgICBhZGQoKXtcbiAgICAgICAgZmlyZWJhc2UucHVzaChcbiAgICAgICAgICAgICcvaXRlbXMnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnaXRlbSc6IHRoaXMuaXRlbSxcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxvZ291dCgpeyBcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImxvZ2luXCJdKTtcbiAgICB9XG59Il19