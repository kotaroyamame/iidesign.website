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
var ng2_translate_1 = require("ng2-translate");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(route, router, routermodule, translate) {
        this.route = route;
        this.router = router;
        this.routermodule = routermodule;
        this.translate = translate;
        this.orVal = "これがオリジナルだ〜";
        this.yourName = "koo";
        translate.setDefaultLang('en');
        translate.use('en');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
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
        providers: [],
        animations: [
            core_1.trigger('myAnimate', [
                core_1.state('inactive', core_1.style({
                    backgroundColor: '#f00',
                    transform: 'scale(2)'
                })),
                core_1.state('active', core_1.style({
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
        ng2_translate_1.TranslateService])
], AppComponent);
exports.AppComponent = AppComponent;
var Page01 = (function () {
    function Page01() {
        this.orVal = " ここは１ページです";
        this.yourName = "koo";
        this.show = "active";
    }
    Page01.prototype.ngOnInit = function () {
    };
    Page01.prototype.cliked = function () {
        this.yourName = "名無しさん";
        if (this.show == "active")
            this.show = "inactive";
        else
            this.show = "active";
    };
    return Page01;
}());
Page01 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: "../view/page_01.html",
        animations: [
            core_1.trigger('myAnimate', [
                core_1.state('inactive', core_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1)'
                })),
                core_1.state('active', core_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                core_1.transition('inactive => active', [
                    core_1.animate('800ms ease-in')
                ]),
                core_1.transition('active => inactive', [
                    core_1.animate('800ms ease-in')
                ])
            ])
        ]
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
        console.log("ngOnInit");
    };
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