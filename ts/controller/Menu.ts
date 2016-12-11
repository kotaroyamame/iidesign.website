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

@Component({
  selector: 'main-menu',
  templateUrl: "../view/menu.html",
})

export class MenuComponent {

  public active() {
    console.log("active");
  }
}