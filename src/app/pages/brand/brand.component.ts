import { addDoc, collection, Firestore } from '@angular/fire/firestore';
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
    pais: 'Brasil',
    nome: 'Paraná'
  }


  constructor( private buyerSerivce: BuyerService, private firestore: Firestore) {

  }
  ngOnInit(){
    this.item$ =  this.buyerSerivce.getList();
  }

  add(){
    let colecao = collection(this.firestore, 'novo')
    this.buyerSerivce.includeDoc(colecao, this.data)
  }

}
