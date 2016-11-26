import { Injectable } from '@angular/core';

@Injectable()
export class AjaxService {
  anyMethod():void {}

}
@Injectable()
export class ChangeState{

  active(){
    console.log("active service");
  }

}