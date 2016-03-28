import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Bike } from './bike';
import { BikeService} from './bike.service';

@Component({
    selector: 'my-dashboard',
    styleUrls: ['app/dashboard.component.css'],
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    bikes: Bike[] = [];

    constructor(private _bikeService: BikeService,
                private _router: Router) {
    }

    ngOnInit() {
        this._bikeService.getBikes().subscribe(
            bikes => this.bikes = bikes);
    }

    gotoDetail(bike: Bike) {
        let link = ["BikeDetail", {id: bike.id}];
        this._router.navigate(link);
    }
}
