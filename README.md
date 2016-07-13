# Angular 2 - Intro

In this workshop we'll be building an Angular 2 app "El Menon de Oro" that allow users to:

* Give menon de oro to any Menon 
* Remove menon de oro from any menon who has one
* See all the menones that won menon de oro in the past

# The Angular CLI

One of the easiest ways to start a new Angular 2 application is to use the brand new Angular command-line interface (CLI) 
that allows you to create an application that already works, right out of the box and that follows the best practices.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.9.

## Install it!
To install angular CLI run the following in the terminal:
```bash
$ npm install -g angular-cli
```

##Generating our **Menon de Oro** app
```bash
$ ng new menon-de-oro
```
This will create a new directory for us with all the resources that we need to get started!

**Navigate to the new directory:**

```bash
$ cd menon-de-oro
```

Now, let's **start the dev server** with the following command:
```bash
$ ng serve
```
**Awesome right?**

For our app we will need:
* Header and home component
* Menon class
* Prize class (representing menon de oro)
* Menon service (to handle all the needed CRUD operations)

## Navbar and Header

Let's create a component to handle the navbar and header, run the following:
```bash
$ ng generate component header
```
This will create:
* src/app/header/header.component.css
* src/app/header/header.component.html
* src/app/header/header.component.spec.ts
* src/app/header/header.component.ts
* src/app/header/index.ts

Let's add our html in our component's view, please paste the following html in **header.component.html** :
```html
<!-- Header -->
<div id="header-wrapper">
   <div id="header">
      <!-- Logo -->
      <h1><a href="index.html">Menon de oro</a></h1>
      <!-- Nav -->
      <nav id="nav">
         <ul>
            <li class="current"><a>Home</a></li>
            <li><a>Menones</a></li>
         </ul>
      </nav>
    </div>
</div>
```

Now, go to **app.component.html** and replace its content with the following:
```html
<app-header></app-header>
```

Go to **index.html** and replace with:
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Menon de Oro</title>
  <base href="/">

  {{#unless environment.production}}
  <script src="/ember-cli-live-reload.js" type="text/javascript"></script>
  {{/unless}}
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="app/css/main.css" />
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body class="no-sidebar"> <!--we just really wan to change some css classes!-->
  <div id="page-wrapper">
    <app-root>Loading...</app-root>
  </div>

    {{#each scripts.polyfills}}
    <script src="{{.}}"></script>
    {{/each}}
    <script>
      System.import('system-config.js').then(function () {
        System.import('main');
      }).catch(console.error.bind(console));
    </script>
</body>
</html>

```

serve the app and see our newly added header!

**it is not showing, right?**

OK, don't panic, we need to tell angular where to get things, in this case our app.component doesn't know about our header component, we need to tell it.
Go to the **app.component.ts** and replace its content with the following:
```javascript
import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HeaderComponent ]
})
export class AppComponent {
 
}

```
it's working now!

## Home component
Let's create our home component, run the following:
```bash
$ ng generate component home
```

Let's add our html in our component's view, please paste the following html in **home.component.html** :
```html
<div id="main-wrapper">
   <div class="container">
      <article class="box post">
         <a href="#" class="image featured"><img src="./app/css/images/pic01.jpg" alt="" /></a>
         <header>
            <h2>Menon de Oro</h2>
            <p>El premio que todos quieren tener</p>
         </header>
         <p>
            Dale a tu cuerpo alegria Macarena Que tu cuerpo es pa' darle alegria y cosa buena Dale a tu cuerpo alegria, Macarena
            Hey Macarena Dale a tu cuerpo alegria Macarena Que tu cuerpo es pa' darle alegria y cosa buena Dale a tu cuerpo alegria, Macarena
            Hey Macarena Macarena tiene un novio que se llama Que se llama de apellido Vitorino Que en la jura de bandera el muchacho 
            Se la dio con dos amigos Macarena tiene un novio que se llama Que se llama de apellido Vitorino Y en la jura de bandera el muchacho
            Se la dio con dos amigos Dale a tu cuerpo alegria Macarena Que tu cuerpo es pa' darle alegria y cosa buena Dale a tu cuerpo alegria, Macarena
            Hey Macarena Dale a tu cuerpo alegria Macarena Que tu cuerpo es pa' darle alegria y cosa buena
         </p>
         <section>
            <header>
               <h3>Something else</h3>
            </header>
            <p>
               Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
               eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
               elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
               sit amet nullam consequat feugiat dolore tempus.
            </p>
         </section>
         <section>
            <header>
               <h3>So in conclusion ...</h3>
            </header>
            <p>
               #YaCallateCabron
            </p>
         </section>
      </article>
   </div>
</div>
```

Add Home component to app component:
```javascript
<...>
import { HomeComponent } from './home/home.component';

@Component({
 <...>
  directives: [ <...>, HomeComponent, ROUTER_DIRECTIVES ]
})
export class AppComponent {
 
}
```

## Menon Class

Let's create our Menon class, run the following:
```bash
ng generate class Menon
```

Replace the content with this:
```bash
export class Menon {
    id: number;
    name: string = '';
    gender: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
```
The Angular CLI creates a spec file for every component/service/class it generates, let's see how we can test our angular 2 app.
Open the **menon.spec.ts** file and add the following unit test:
```javascript
it('should accept values in the constructor', () => {
    let menon = new Menon({
      name: 'Yesenia',
      gender: 'F'
    });
    expect(menon.name).toEqual('Yesenia');
    expect(menon.gender).toEqual('F');
  });
```
once the file is saved, run the following command:
```bash
ng test
```
## Prize Class
Let's create our Prize class, run the following:
```bash
ng generate class Prize
```

Replace the content with this:
```bash
export class Prize {
    id: number;
    menonId: number;
    date: Date = new Date();
    reason: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
```
## MenonService
The MenonService will handle all the logic of our app (we will store all the data in-memory for this workshop).

Generate the service, run:
```bash
ng generate service MenonService
```

Replace the content with:
```javascript
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Menon } from './menon';
import { Prize } from './prize';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenonService {
  //simulate id's autoincrement 
  lastPrizeId: number = 0;
  prizes: Prize[] = [];
  menones:Promise<Menon[]>;

  private menonesUrl = 'app/menones.json';

  constructor(private http: Http) {
    this.menones = this.getMenones();
  }

  getMenones(){
     return this.http.get(this.menonesUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getMenon(value?: number) {
    return this.http.get(this.menonesUrl)
      .map((response: Response) => {
        let menones = <Menon[]>response.json().data;
        if (!value) return menones;
        return menones.filter(v => v.id === value)
      }).toPromise()
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.log(error);
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}

```
## MenonesComponent

Let's create our menones component to display our awesome menones!
```bash
ng generate component menones
```

Open **menones.component.ts** and replace its content with the following:
```javascript
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HTTP_PROVIDERS}    from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


import { MenonService } from '../menon.service';
import { Menon } from '../menon';

@Component({
  moduleId: module.id,
  selector: 'app-menones',
  templateUrl: 'menones.component.html',
  styleUrls: ['menones.component.css'],
  providers: [ MenonService, HTTP_PROVIDERS ]
})
export class MenonesComponent implements OnInit{
  menones: Promise<Menon[]>;
  constructor(
    private menonService: MenonService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

  ngOnInit() { this.getMenones(); }

  getMenones(){
    this.menones = this.menonService.getMenones();
  }
}

```

Open **menones.component.html** and replace its content with:
```html
<div class="8u 12u(mobile)">
  <section>
	  <header>
		  <h2>Menones</h2>
		</header>
		<ul class="dates">
		  <li *ngFor="let menon of menones | async">
			  <span *ngFor="let prize of prizes" class="date"><strong>{{prize.date | date}}</strong></span>
				<h3><a>{{menon.name}}</a></h3>
				<p *ngIf="prize">{{prize.reason}}</p>
        <button class="button" (click)="gotoDetails(menon)">Dar Menon de Oro</button>
			</li>
		</ul>
	</section>
</div>
```
**remember to add MenonesComponent to AppComponent** now you know how to do that!

OK, so far so good, now its time to make our routes work! to be able to move from one component to another.

## Adding app.routes.ts
Create a new typescript file inside app folder and name it app.routes.ts and add the following:
```javascript
import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { MenonesComponent } from '../app/menones/menones.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent},
    { path: 'menones', component: MenonesComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
```

Ok, we just created our routes, but we need to tell angular about them, add the following lines to **main.ts**:
```javascript
<...>
import { APP_ROUTER_PROVIDERS } from './app/app.routes';


<...>

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
]);
```
Go to the header.component and add the router provider:
```javascript
<...>
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  <...>
  directives: [ROUTER_DIRECTIVES]
})
<...>
```
**Do the same for home.component.ts**

Add the following line at the end of **app.component.html**
```html
<router-outlet></router-outlet>
```

Just one more thing to go, open **header.component.html** and replace the anchor tags with the following:
```html
<a [routerLink]="['']">Home</a>
<a [routerLink]="['menones']">Menones</a>
```
with **[routerLink]** we tell angular wich route we want to use for that anchor.

## Adding DadorDeOroComponent
Ok, we have our menones page, now we want to give them prizes! in our html we have a button to do that,
but it is not working, let's fix it.
Create a new component:
```bash
ng generate component DadorDeOro
```
Replace its content with the following:
```javascript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {HTTP_PROVIDERS}    from '@angular/http';

import { MenonService } from '../menon.service';
import { Menon } from '../menon';
import { Prize } from '../prize';

@Component({
  moduleId: module.id,
  selector: 'app-dador-de-oro',
  templateUrl: 'dador-de-oro.component.html',
  styleUrls: ['dador-de-oro.component.css'],
  providers: [ MenonService, HTTP_PROVIDERS ]
})
export class DadorDeOroComponent implements OnInit, OnDestroy {
  menon: Menon;
  editName: string;
  prize: string;
  private sub: any;

  constructor(
    private menonService : MenonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        let id = +params['id'];
        this.menonService.getMenon(id)
          .then(menon => {
            if (menon) {
              this.editName = menon[0].name;
              this.menon = menon[0];
            } else { // id not found
              this.gotoMenones();
            }
          });
      });

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

    gotoMenones() {
      this.router.navigate(['/menones']);
  }

  save(){
    let newPrize = new Prize({
      id: 1,
      menonId: this.menon.id,
      date: new Date(),
      reason: this.prize
    });
    this.menon.prizes.push(newPrize);
    this.prize ='';
  }

  cancel(){
    this.gotoMenones();
  }
}

```
Open dador-de-oro.component.html and replace its content with:
```html
<div *ngIf="menon">
    <h3>"{{editName}}"</h3>
    <h4>{{prize}}</h4>
    <div>
      <label>Id: </label>{{menon.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
       <div>
      <label>Motivo del premimo: </label>
      <input [(ngModel)]="prize" placeholder="prize reason"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
     <span *ngFor="let menonOro of menon.prizes" class="date">Jan <strong>{{menonOro.date | date}}</strong>
				<p *ngIf="menon.prizes.length > 0">{{menonOro.reason}}</p></span>
  </div>
```
Open MenonesComponent and add the following code at the end:
```javascript
 gotoDetails(menon: Menon) {
    // Navigate with Absolute link
    this.router.navigate(['/set-prize', menon.id]);
  }
```
Here we are redirectiong to a new route, so, we need to add that new route into our **app.routes.ts**
```javascript
<...>
import { DadorDeOroComponent } from '../app/dador-de-oro/dador-de-oro.component';


export const routes: RouterConfig = [
    <...>
    { path: 'set-prize/:id', component: DadorDeOroComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
```

