import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { MenonesComponent } from '../app/menones/menones.component';
import { DadorDeOroComponent } from '../app/dador-de-oro/dador-de-oro.component';


export const routes: RouterConfig = [
    { path: '', component: HomeComponent},
    { path: 'menones', component: MenonesComponent},
    { path: 'set-prize/:id', component: DadorDeOroComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];