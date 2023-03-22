import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  cars: Car[] =
    [
      { brand: 'Volkswagen', year: '2012', color: 'White', vin: 'dsad231ff' },
      { brand: 'Audi', year: '2011', color: 'Black', vin: 'gwregre345' },
      { brand: 'Renault', year: '2005', color: 'Gray', vin: 'h354htr' },
      { brand: 'BMW', year: '2003', color: 'Blue', vin: 'j6w54qgh' },
      { brand: 'Mercedes', year: '1995', color: 'White', vin: 'hrtwy34' },
      { brand: 'Volvo', year: '2005', color: 'Black', vin: 'jejtyj' },
      { brand: 'Honda', year: '2012', color: 'Yellow', vin: 'g43gr' },
      { brand: 'Jaguar', year: '2013', color: 'White', vin: 'greg34' },
      { brand: 'Ford', year: '2000', color: 'Black', vin: 'h54hw5' },
      { brand: 'Fiat', year: '2013', color: 'Red', vin: '245t2s' }
    ]


    ;

//  constructor(private carService: CarService) { }

  //  ngOnInit() {
  //      this.carService.getCarsSmall().then(cars => this.cars = cars);
  //  }
}
