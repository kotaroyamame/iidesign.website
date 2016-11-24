import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent, Page01, Page02, MenuComponent } from './app.component';
// import { AjaxService } from './ajax.service';

const appRoutes: Routes = [
  { path: 'page01', component: Page01 },
  { path: 'page02', component: Page02 },
  { path: '**', component: AppComponent }
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
    MenuComponent
  ],
  providers:[
    HttpModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
	
 }