import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';

import {BikeService} from './bike.service';
import {Bike} from './bike';

@Component({
    selector: 'my-bike-detail',
    inputs: ['bike'],
    styleUrls: ['app/bike-detail.component.css'],
    templateUrl: 'app/bike-detail.component.html'
})
export class BikeDetailComponent implements OnInit {
    constructor(
        private _bikeService: BikeService,
        private _routeParams: RouteParams) {
    }
    
    @Input() bike: Bike;

    ngOnInit() {
        let id = +this._routeParams.get('id');

        console.log("INIT " + id);
        
        this._bikeService.getBike(id).subscribe(bike => this.bike = bike);
    }

    goBack() {
        window.history.back();
    }
}
