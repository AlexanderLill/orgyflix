import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Event } from '../models/event';

@Injectable()
export class ApiService {

    private static handleResponse(Type: any, expectSingle = false) {
        return function (response: Response) {

            let jsonResponse = response.json();
            if (jsonResponse.status === 200) {
                throw new Error('API Error: ' + response.statusText);
            }

            let jsonArray: [any] = jsonResponse;
            let objectArray = jsonArray.map(object => Type.fromObject(object));

            if (expectSingle) {
                return objectArray.length > 0 ? objectArray[0] : null;
            } else {
                return objectArray;
            }
        };
    };

    constructor(private http: Http) {
    }

    getAllEvents(): Observable<Event[]> {
        let request = this.http.get('http://localhost:3000/events');
        return request.map(ApiService.handleResponse(Event));
    };
}
