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
})

export class MenuComponent {

  constructor(
    private changeState:ChangeState
    ){}

  public active() {
    console.log("active");
    this.changeState.active();
  }
}