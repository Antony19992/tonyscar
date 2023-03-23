import { Injectable } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  item$: Observable<any[]>;

  constructor(firestore: Firestore) { 
    const dados = collection(firestore, 'items');
    this.item$ = collectionData(dados);
  }
}
