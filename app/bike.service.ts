import {BIKES} from './mock-bikes';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
import {Bike} from './bike';

@Injectable()
export class BikeService {

    constructor(private _http: Http) {
    }
    
    getBikes() {
        return this._http.get("http://localhost:8080/bike/")
            .map(res => <Bike[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getBike(id: number) {
        return this._http.get("http://localhost:8080/bike/" + id)
            .map(res => <Bike> res.json())
            .do(data => console.log(data))
                .catch(this.handleError);
    }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
    
}
