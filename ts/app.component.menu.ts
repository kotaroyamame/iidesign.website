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

import { Routes, RouterModule, ActivatedRoute, Router, CanDeactivate } from '@angular/router';
import { ChangeState } from './app.service';

@Component({
  selector: 'main-menu',
  templateUrl: "../view/menu.html",
  animations: [
    trigger('menuAnimate', [
      state('void', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1) translateY(0)'
      })),
      state('hover', style({
        backgroundColor: '#eee',
    transform: 'scale(1.1) translateY(10px)'
      })),
      transition('void => hover', [
        animate('300ms linear')
      ]),
      transition('hover => void', [
        animate('300ms linear')
      ])
    ])
  ]
})

export class MenuComponent {

  public menus: Array<any> = [
    {state:"/page01",val:"Page1",hover:"void"},
  { state: "/page02", val: "Page2", hover: "void" },
  { state: "/form", val: "Form", hover: "void" }
  ];

  constructor(
    private changeState:ChangeState
   ){}

  public active() {
    console.log("active");
    this.changeState.active();
  }
}