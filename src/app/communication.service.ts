import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Question {
    id?: Number;
    category?: String;
    question?: String;
    answer?: String;
}

@Injectable()
export class CommunicationService {
    private basePath = "localhost:4200/backend";

    constructor (protected http: Http) { }

    get(categoryName: String): Observable<Question[]> {
        const path = this.basePath + `?category=`+categoryName;

        return this.http.get(path).map((response: Response) => {
            return response.json().data;
        });
    }
}