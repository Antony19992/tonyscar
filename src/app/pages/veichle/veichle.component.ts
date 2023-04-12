import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BuyerService } from 'src/app/services/buyer.service';


@Component({
  selector: 'app-veichle',
  templateUrl: './veichle.component.html',
  styleUrls: ['./veichle.component.css']
})

export class VeichleComponent implements OnInit {
  
  constructor(private buyerSerivce: BuyerService) {}
  
  item$?: Observable<any[]>;
  
  ngOnInit(){
    this.item$ = this.buyerSerivce.getList();
    console.log(this.item$)
  }

}