import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { Car } from '../models/car.model';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

//    getCarsSmall() {
//        return firstValueFrom(this.http.get('/showcase/resources/data/cars-small.json'))
//                    .then(res => <Car[]>res.data)
//                    .then(data => { return data; });
//    }
}
