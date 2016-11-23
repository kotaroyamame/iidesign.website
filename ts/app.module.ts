import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent,MenuComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";


@NgModule({
	imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],

	declarations: [
  AppComponent,
  MenuComponent
  ],
	bootstrap: [AppComponent]
})

export class AppModule {
	
 }