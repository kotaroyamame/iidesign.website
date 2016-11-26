import { Component,Directive,OnInit } from '@angular/core';
import { ActivatedRoute, Router,CanDeactivate} from '@angular/router';
// import { AjaxService } from './ajax.service';

@Component({
  selector: 'main-menu',
  templateUrl: "../view/menu.html",
})

export class MenuComponent {
  

}

@Component({
  moduleId:module.id,
	selector: 'my-app',
	templateUrl:"../view/top.html"
})


export class AppComponent implements OnInit {
  orVal = "これがオリジナルだ〜";
  yourName: string="koo";
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){

  }
  ngOnInit(){
    // this.router.events.

  }
  // getAjax(){
  //   this.ajaxService.getJson()
  //     .subscribe(
  //     res => this.yourName = res
  //     );
  // }
  cliked() {
    this.yourName = "名無しさん";

  }
}
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: "../view/page_01.html"
})
export class Page01 implements OnInit {
  orVal = " ここは１ページです";
  yourName: string = "koo";
  constructor() { }
  ngOnInit() {

  }
  // getAjax(){
  //   this.ajaxService.getJson()
  //     .subscribe(
  //     res => this.yourName = res
  //     );
  // }
  cliked() {
    this.yourName = "名無しさん";
  }
}
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: "../view/page_02.html"
})
export class Page02 implements OnInit {
  orVal = " ここは１ページです";
  yourName: string = "koo";
  constructor() { }
  ngOnInit() {

  }
  // getAjax(){
  //   this.ajaxService.getJson()
  //     .subscribe(
  //     res => this.yourName = res
  //     );
  // }
  cliked() {
    this.yourName = "名無しさん";
  }
}