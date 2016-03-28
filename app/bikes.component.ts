import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {BikeDetailComponent} from './bike-detail.component';
import {Bike} from './bike';
import {BikeService} from './bike.service';

@Component({
    selector: 'my-bikes',
    styleUrls: ['app/bikes.component.css'],
    templateUrl: 'app/bikes.component.html',
    directives: [BikeDetailComponent],
})
export class BikesComponent implements OnInit {
    selectedBike: Bike;

    bikes: Bike[];
    
    constructor(private _bikeService: BikeService,
               private _router: Router) {};

    getBikes() {
        this._bikeService.getBikes().subscribe(bikes => this.bikes = bikes);
    }
    
    onSelect(bike: Bike) {
        this.selectedBike = bike;
    }

    gotoDetail() {
        let link = ["BikeDetail", {id: this.selectedBike.id}];
        this._router.navigate(link);
    }

    ngOnInit() {
        console.log("Bikes init");
        this.getBikes();
    }
}
