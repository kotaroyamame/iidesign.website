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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate");
var app_component_1 = require("./app.component");
var app_component_menu_1 = require("./app.component.menu");
var app_service_1 = require("./app.service");
var app_component_form_1 = require("./app.component.form");
var appRoutes = [
    { path: 'page01', component: app_component_1.Page01 },
    { path: 'page02', component: app_component_1.Page02 },
    { path: 'form', component: app_component_form_1.InfoForm },
    { path: '**', component: app_component_1.Page01 }
];
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, './assets/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes),
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [http_1.Http]
            }),
            forms_1.FormsModule
        ],
        exports: [
            router_1.RouterModule,
            ng2_translate_1.TranslateModule
        ],
        declarations: [
            app_component_1.AppComponent,
            app_component_1.Page01,
            app_component_1.Page02,
            app_component_menu_1.MenuComponent,
            app_component_form_1.InfoForm
        ],
        providers: [
            app_service_1.AjaxService,
            app_service_1.ChangeState,
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map