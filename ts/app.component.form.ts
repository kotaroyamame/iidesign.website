import { Component,Directive,OnInit } from '@angular/core';
import { ActivatedRoute, Router,CanDeactivate} from '@angular/router';
import { Http, Response } from '@angular/http';
import { AjaxService } from './app.service';

@Component({
  moduleId: module.id,
  selector: 'info-form',
  templateUrl: "../view/infoForm.html"
})

export class InfoForm {

  private name:string="";
  private mail: string="";

  constructor(
    private ajax:AjaxService
  ){
    this.init();
  }

  private init(){
    console.log(localStorage.getItem("name"));
    if (localStorage.getItem("name")){
      this.name = localStorage.getItem("name");
     }
    if (localStorage.getItem("mail")) {
      this.mail = localStorage.getItem("mail");
    }
  }

  public submit(){
    localStorage.setItem("name", this.name);
    localStorage.setItem("mail", this.mail);
    console.log("submit" + this.name+this.mail);
  this.ajax.anyMethod();
  }
  

}