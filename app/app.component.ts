import { Component }       from 'angular2/core';
import { BikeService }     from './bike.service';
import { BikesComponent } from './bikes.component';
import { BikeDetailComponent } from './bike-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
        <a [routerLink]="['Dashboard']">Dash</a>
        <a [routerLink]="['Bikes']">Bikes</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        BikeService
    ]
})
@RouteConfig([
    {
        path: '/bikes',
        name: 'Bikes',
        component: BikesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'BikeDetail',
        component: BikeDetailComponent
    }
])
export class AppComponent {
    title = 'Bike trackR';
}
