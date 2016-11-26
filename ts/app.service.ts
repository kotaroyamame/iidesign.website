import { Injectable,Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxService {
  constructor(
    private http: Http
  ){}
  get(url:string):any {
    return this.http.get(url);
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