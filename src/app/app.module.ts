import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModuleModule } from './product/product-module.module';

//this is the angular module class
//it tells the angular compiler to find the component class
//which class to bootstrap
//and imports external modules to work
//here @NgModule define the decorator which tells the angular compiler about the app
//declartions tells which components to add , imports contain browserModule which needed to be imported


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }]),
    ProductModuleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
