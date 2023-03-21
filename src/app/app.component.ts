import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface Item {
  name: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sixseven';
  item$: Observable<any[]>;
  constructor(firestore: Firestore) {
    const dados = collection(firestore, 'items');
    this.item$ = collectionData(dados);
  }
}
