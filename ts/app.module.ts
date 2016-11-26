import { NgModule,animate } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent, Page01, Page02} from './app.component';
import { MenuComponent } from './app.component.menu';
import { InfoForm } from './app.component.form';
import { ChangeState,AjaxService } from './app.service';

const appRoutes: Routes = [
  { path: 'page01', component: Page01 },
  { path: 'page02', component: Page02 },
  { path: 'form', component: InfoForm},
  { path: '**', component: Page01 }
];

@NgModule({
	imports: [
    BrowserModule,
  RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  exports: [
    RouterModule
  ],

	declarations: [
    AppComponent,
    Page01,
    Page02,
    MenuComponent,
    InfoForm
  ],
  providers:[
    AjaxService,
    ChangeState,
    HttpModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
	
 }