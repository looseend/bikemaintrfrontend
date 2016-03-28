System.register(['angular2/core', 'angular2/router', './bike-detail.component', './bike.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, bike_detail_component_1, bike_service_1;
    var BikesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bike_detail_component_1_1) {
                bike_detail_component_1 = bike_detail_component_1_1;
            },
            function (bike_service_1_1) {
                bike_service_1 = bike_service_1_1;
            }],
        execute: function() {
            BikesComponent = (function () {
                function BikesComponent(_bikeService, _router) {
                    this._bikeService = _bikeService;
                    this._router = _router;
                }
                ;
                BikesComponent.prototype.getBikes = function () {
                    var _this = this;
                    this._bikeService.getBikes().subscribe(function (bikes) { return _this.bikes = bikes; });
                };
                BikesComponent.prototype.onSelect = function (bike) {
                    this.selectedBike = bike;
                };
                BikesComponent.prototype.gotoDetail = function () {
                    var link = ["BikeDetail", { id: this.selectedBike.id }];
                    this._router.navigate(link);
                };
                BikesComponent.prototype.ngOnInit = function () {
                    console.log("Bikes init");
                    this.getBikes();
                };
                BikesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-bikes',
                        styleUrls: ['app/bikes.component.css'],
                        templateUrl: 'app/bikes.component.html',
                        directives: [bike_detail_component_1.BikeDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [bike_service_1.BikeService, router_1.Router])
                ], BikesComponent);
                return BikesComponent;
            }());
            exports_1("BikesComponent", BikesComponent);
        }
    }
});
//# sourceMappingURL=bikes.component.js.map