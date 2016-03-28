System.register(['angular2/core', 'angular2/router', './bike.service'], function(exports_1, context_1) {
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
    var core_1, router_1, bike_service_1;
    var BikeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bike_service_1_1) {
                bike_service_1 = bike_service_1_1;
            }],
        execute: function() {
            BikeDetailComponent = (function () {
                function BikeDetailComponent(_bikeService, _routeParams) {
                    this._bikeService = _bikeService;
                    this._routeParams = _routeParams;
                }
                BikeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._bikeService.getBike(id).then(function (bike) { return _this.bike = bike; });
                };
                BikeDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BikeDetailComponent.prototype, "bike", void 0);
                BikeDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-bike-detail',
                        inputs: ['bike'],
                        styleUrls: ['app/bike-detail.component.css'],
                        templateUrl: 'app/bike-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [bike_service_1.BikeService, router_1.RouteParams])
                ], BikeDetailComponent);
                return BikeDetailComponent;
            }());
            exports_1("BikeDetailComponent", BikeDetailComponent);
        }
    }
});
//# sourceMappingURL=bike-detail.component.js.map