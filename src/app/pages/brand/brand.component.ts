import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  item$: Observable<any[]>;
  valor$: Observable<any[]>;

  constructor(firestore: Firestore) {
    const dados = collection(firestore, 'items');
    this.item$ = collectionData(dados);
    const valor = collection(firestore, 'preco');
    this.valor$ = collectionData(valor);
  }

}
