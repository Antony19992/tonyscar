import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  item$?: Observable<any[]>;
  data = {
    name: 'Los Angeles 123',
    state: 'CA 123',
    country: 'USA 123'
  };

  constructor( private buyerSerivce: BuyerService) {
    this.item$ =  this.buyerSerivce.getList();
  }

}
