import { Injectable } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
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
    const dados = collection(this.firestore, 'items');
    this.item$ = collectionData(dados);
    return this.item$;
  }
}
