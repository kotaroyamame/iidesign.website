import { NgModule,animate } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { } from "@agular/translate";
import { HttpModule, Http, Response } from '@angular/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader
} from 'ng2-translate';

import { AppComponent, Page01, Page02} from './app.component';
import { MenuComponent } from './app.component.menu';
import { ChangeState, AjaxService } from './app.service';
import { InfoForm } from './app.component.form';


const appRoutes: Routes = [
  { path: 'page01', component: Page01 },
  { path: 'page02', component: Page02 },
  { path: 'form', component: InfoForm},
  { path: '**', component: Page01 }
];
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
	imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      provide:TranslateLoader,
      useFactory:(createTranslateLoader),
      deps:[Http]
    }),
    FormsModule
  ],
  exports: [
    RouterModule,
    TranslateModule
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
    
    // Response
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
	
 }