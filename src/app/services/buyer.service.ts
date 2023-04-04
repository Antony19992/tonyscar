import { Injectable } from '@angular/core';

import { Firestore, collectionData, collection, addDoc, collectionSnapshots } from '@angular/fire/firestore';
import { documentId } from 'firebase/firestore';
import { Observable } from 'rxjs';

//quando serviço é providedIn root não precisa colocar nos providers.
//provideIn root é meio que um serviço coringa q estará disponivel para todos, mas deixa a app mais pesadinha
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  item$!: Observable<any[]>;

  //Daria pra fazer um service generico do firestore e só importar o firestore e um lugar.
  constructor(private firestore: Firestore) {
    // Inicializar no construtor funcionou também, mas não sei se acho correto
    // const dados = collection(this.firestore, 'items');
    // this.item$ = collectionData(dados);
  }

  getList() {
    const ref = collection(this.firestore, 'items');
    this.item$ = collectionData(ref);
    return this.item$;
  }

  includeDoc(collection: any, data: any): Boolean{
  addDoc(collection, data)
    return true
  }

}
