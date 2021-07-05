import { Component } from "@angular/core";

//this is component class defined by component decorator 
//decorator act as a meta data
//selector act as a directive that can be used in html as a custom tag 
//template defines the html code that we need to define the html code in custom tag
//to make decorator component we need to import the component class 

@Component({
  selector: `pm-root`,
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
  <li><a class='nav-link' routerLink='/welcome' >Home</a></li>
  <li><a class='nav-link' routerLink='/products' >Product List</a></li>
  </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `
  //here we use routerLink directive to route the link defined in RouterModule
  //the respective component is then viewed in the defined router-outlet tag
})


export class AppComponent {
  pageTitle: string = 'Pulkit Dukan Wala'
}