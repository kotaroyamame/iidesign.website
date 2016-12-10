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
var app_service_1 = require("./app.service");
var MenuComponent = (function () {
    function MenuComponent(changeState) {
        this.changeState = changeState;
        this.menus = [
            { state: "/page01", val: "Page1", hover: "void" },
            { state: "/page02", val: "Page2", hover: "void" },
            { state: "/form", val: "Form", hover: "void" }
        ];
    }
    MenuComponent.prototype.active = function () {
        console.log("active");
        this.changeState.active();
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'main-menu',
        templateUrl: "../view/menu.html",
        animations: [
            core_1.trigger('menuAnimate', [
                core_1.state('void', core_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1) translateY(0)'
                })),
                core_1.state('hover', core_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1) translateY(10px)'
                })),
                core_1.transition('void => hover', [
                    core_1.animate('300ms linear')
                ]),
                core_1.transition('hover => void', [
                    core_1.animate('300ms linear')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [app_service_1.ChangeState])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=app.component.menu.js.map