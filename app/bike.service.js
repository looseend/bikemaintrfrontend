System.register(['./mock-bikes', 'angular2/http', 'angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var mock_bikes_1, http_1, core_1, Observable_1;
    var BikeService;
    return {
        setters:[
            function (mock_bikes_1_1) {
                mock_bikes_1 = mock_bikes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            BikeService = (function () {
                function BikeService(_http) {
                    this._http = _http;
                }
                BikeService.prototype.getBikes = function () {
                    return this._http.get("http://localhost:8080/bike/")
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                BikeService.prototype.getBike = function (id) {
                    return Promise.resolve(mock_bikes_1.BIKES).then(function (bikes) { return bikes.filter(function (bike) { return bike.id === id; })[0]; });
                };
                BikeService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                BikeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BikeService);
                return BikeService;
            }());
            exports_1("BikeService", BikeService);
        }
    }
});
//# sourceMappingURL=bike.service.js.map