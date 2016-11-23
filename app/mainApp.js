var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define("app.component", ["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    var AppComponent = (function () {
        function AppComponent() {
        }
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>Hello World!</h1>'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
define("app.module", ["require", "exports", "@angular/core", "@angular/platform-browser", "app.component"], function (require, exports, core_2, platform_browser_1, app_component_1) {
    "use strict";
    var AppModule = (function () {
        function AppModule() {
            console.log("あｓｄｆ");
        }
        return AppModule;
    }());
    AppModule = __decorate([
        core_2.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    exports.AppModule = AppModule;
});
define("main", ["require", "exports", "@angular/platform-browser-dynamic", "app.module"], function (require, exports, platform_browser_dynamic_1, app_module_1) {
    "use strict";
    var platform = platform_browser_dynamic_1.platformBrowserDynamic();
    platform.bootstrapModule(app_module_1.AppModule);
});
//# sourceMappingURL=mainApp.js.map