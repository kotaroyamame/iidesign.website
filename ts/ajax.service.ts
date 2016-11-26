import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class AjaxService {

    constructor(private http: Http) { }

    private heroesUrl:string = 'app/heroes';  // URL to web api

    getJson():Observable<any> {
        return this.http.get(this.heroesUrl);
    }

    // レスポンスデータの整形処理
    private extractData(res: Response){
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }

}
