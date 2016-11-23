import { Component,Directive } from '@angular/core';


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


export class AppComponent {
  orVal = "これがオリジナルだ〜";
  yourName: string="koo";
}
