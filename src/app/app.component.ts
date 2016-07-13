import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { MenonesComponent } from './menones/menones.component';
import { HomeComponent } from './home/home.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HeaderComponent, MenonesComponent, HomeComponent, ROUTER_DIRECTIVES ]
})
export class AppComponent {
 
}
