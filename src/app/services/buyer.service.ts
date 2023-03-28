import { Injectable } from '@angular/core';

import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  data = {
    name: 'Los Angeles 123',
    state: 'CA 123',
    country: 'USA 123'
  };

  constructor(private firestore: Firestore, public item: Observable<any[]>) {
  }


getList(): Observable<any[]>{
  const dados = collection(this.firestore, 'items');
  return this.item = collectionData(dados);
}

insertDoc(){
  const ref = collection(this.firestore, 'dados');
  addDoc(ref, this.data);
}



}
