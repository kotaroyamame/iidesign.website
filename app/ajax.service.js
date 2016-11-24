"use strict";
var AjaxService = (function () {
    function AjaxService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes'; // URL to web api
    }
    AjaxService.prototype.getJson = function () {
        return this.http.get(this.heroesUrl);
    };
    // レスポンスデータの整形処理
    AjaxService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    return AjaxService;
}());
exports.AjaxService = AjaxService;
//# sourceMappingURL=ajax.service.js.map