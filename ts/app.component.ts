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

import {
  TranslateService,
  TranslatePipe
} from 'ng2-translate';

import { Routes,RouterModule,ActivatedRoute, Router,CanDeactivate} from '@angular/router';
// import { AjaxService } from './ajax.service';



@Component({
  moduleId:module.id,
	selector: 'my-app',
	templateUrl:"../view/top.html",
  providers:[],
  animations:[
    trigger('myAnimate', [
      state('inactive',style({
        backgroundColor:'#f00',
        transform:'scale(2)'
      })),
      state('active', style({
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
    private routermodule:RouterModule,
    private translate:TranslateService
  ){
    translate.setDefaultLang('en');
    translate.use('en');
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
  templateUrl: "../view/page_01.html",
  animations: [
    trigger('myAnimate', [
      state('inactive',style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      transition('inactive => active', [
        animate('800ms ease-in')
      ]),
      transition('active => inactive', [
        animate('800ms ease-in')
      ])
    ])
  ]
})
export class Page01 implements OnInit {
  orVal = " ここは１ページです";
  yourName: string = "koo";
  show: string = "active";
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
    if (this.show == "active")
      this.show = "inactive";
    else
      this.show = "active";
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
    console.log("ngOnInit");
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