import { Component } from '@angular/core';
import { Observable } from 'rxjs';
//import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { BuyerService } from 'src/app/services/buyer.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  item: any;

constructor(public buyer: BuyerService) {

}

onInit(){
this.buyer.getList().subscribe(data => {
  this.item = data
})
}
}



















//  item$: Observable<any[]>;
//  data = {
//    name: 'Los Angeles 123',
//    state: 'CA 123',
//    country: 'USA 123'
//  };

//  constructor(firestore: Firestore) {
//    const dados = collection(firestore, 'items');
//    this.item$ = collectionData(dados);
//
//    const ref = collection(firestore, 'dados');
//    addDoc(ref, this.data);
//  }


