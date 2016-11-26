"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { AjaxService } from './ajax.service';
var AppComponent = (function () {
    function AppComponent(route, router, routermodule, ngZone) {
        this.route = route;
        this.router = router;
        this.routermodule = routermodule;
        this.ngZone = ngZone;
        this.orVal = "これがオリジナルだ〜";
        this.yourName = "koo";
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.router.events.
        // localStorage.setItem("myItem", "value");
        // this._sub = this.route.params.subscrive(params => {
        // console.log(params);
        // });
        this.route.params.subscribe(function (params) {
            console.log("aa");
            console.log(params);
        });
        this.ngZone.run(function (e) {
            console.log(e);
        });
    };
    AppComponent.prototype.active = function () {
        console.log("active p");
    };
    // getAjax(){
    //   this.ajaxService.getJson()
    //     .subscribe(
    //     res => this.yourName = res
    //     );
    // }
    AppComponent.prototype.cliked = function () {
        this.yourName = "名無しさん";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: "../view/top.html",
        animations: [
            core_1.trigger('routerLinkActive', [
                core_1.state('__inactive', core_1.style({
                    backgroundColor: '#f00',
                    transform: 'scale(2)'
                })),
                core_1.state('__active', core_1.style({
                    backgroundColor: '#0f0',
                    transform: 'scale(2)'
                })),
                core_1.transition('inacrive => acrive', core_1.animate('100ms ease-in')),
                core_1.transition('acrive => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        router_1.RouterModule,
        core_1.NgZone])
], AppComponent);
exports.AppComponent = AppComponent;
var Page01 = (function () {
    function Page01() {
        this.orVal = " ここは１ページです";
        this.yourName = "koo";
    }
    Page01.prototype.ngOnInit = function () {
    };
    // getAjax(){
    //   this.ajaxService.getJson()
    //     .subscribe(
    //     res => this.yourName = res
    //     );
    // }
    Page01.prototype.cliked = function () {
        this.yourName = "名無しさん";
    };
    return Page01;
}());
Page01 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: "../view/page_01.html"
    }),
    __metadata("design:paramtypes", [])
], Page01);
exports.Page01 = Page01;
var Page02 = (function () {
    function Page02() {
        this.orVal = " ここは１ページです";
        this.yourName = "koo";
    }
    Page02.prototype.ngOnInit = function () {
    };
    // getAjax(){
    //   this.ajaxService.getJson()
    //     .subscribe(
    //     res => this.yourName = res
    //     );
    // }
    Page02.prototype.cliked = function () {
        this.yourName = "名無しさん";
    };
    return Page02;
}());
Page02 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: "../view/page_02.html"
    }),
    __metadata("design:paramtypes", [])
], Page02);
exports.Page02 = Page02;
//# sourceMappingURL=app.component.js.map