import { collection, Firestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerService } from 'src/app/services/buyer.service';

import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  item$?: Observable<any[]>;

  data = { pais: 'Brasil', nome: 'Paraná' }

  constructor(
    private buyerSerivce: BuyerService,
    private firestore: Firestore,
    public dialog: MatDialog
    ) {
  }

  openDialog() {
    this.dialog.open(DialogElementsDialog);
  }

  ngOnInit(){
    this.item$ =  this.buyerSerivce.getList();
  }

  add(){
    let colecao = collection(this.firestore, 'novo')
    this.buyerSerivce.includeDoc(colecao, this.data)
  }

}
@Component({
  selector: 'dialog-elements-dialog',
  templateUrl: './dialog.elements.html',
})
export class DialogElementsDialog {

  constructor(private dialog: MatDialog) {

  }
  closeWindow() {
    this.dialog.closeAll();
  }
}
