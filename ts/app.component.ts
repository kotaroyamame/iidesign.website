import { 
  Component,
  Directive,
  OnInit,
  animate,
  trigger,
  state,
  style,
  transition,
  NgZone
 } from '@angular/core';

import { Routes,RouterModule,ActivatedRoute, Router,CanDeactivate} from '@angular/router';
// import { AjaxService } from './ajax.service';



@Component({
  moduleId:module.id,
	selector: 'my-app',
	templateUrl:"../view/top.html",
  animations:[
    trigger('routerLinkActive', [
      state('__inactive',style({
        backgroundColor:'#f00',
        transform:'scale(2)'
      })),
      state('__active', style({
        backgroundColor:'#0f0',
        transform:'scale(2)'
      })),
      transition('inacrive => acrive',animate('100ms ease-in')),
      transition('acrive => inactive',animate('100ms ease-out'))
    ])
  ]
})


export class AppComponent implements OnInit {
  orVal = "これがオリジナルだ〜";
  yourName: string="koo";
  private _sub: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  private routermodule:RouterModule
  ){

  }
  ngOnInit(){


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