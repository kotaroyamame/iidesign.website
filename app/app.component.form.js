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
var InfoForm = (function () {
    function InfoForm(ajax) {
        this.ajax = ajax;
        this.name = "";
        this.mail = "";
        this.init();
    }
    InfoForm.prototype.init = function () {
        console.log(localStorage.getItem("name"));
        if (localStorage.getItem("name")) {
            this.name = localStorage.getItem("name");
        }
        if (localStorage.getItem("mail")) {
            this.mail = localStorage.getItem("mail");
        }
    };
    InfoForm.prototype.submit = function () {
        localStorage.setItem("name", this.name);
        localStorage.setItem("mail", this.mail);
        console.log("submit" + this.name + this.mail);
        this.ajax.anyMethod();
    };
    return InfoForm;
}());
InfoForm = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'info-form',
        templateUrl: "../view/infoForm.html"
    }),
    __metadata("design:paramtypes", [app_service_1.AjaxService])
], InfoForm);
exports.InfoForm = InfoForm;
//# sourceMappingURL=app.component.form.js.map