import { Injectable,Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxService {
  constructor(
    private http: Http
  ){}
  get(url:string):Ovservable<any> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);;
  }
  post(url:string,body:any){
    return this.http.post(url,body);
  }
  anyMethod(){
    console.log("service anyMethod");
  }
}

@Injectable()
export class ChangeState{

  active(){
    console.log("active service");
  }

}