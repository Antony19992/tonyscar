import { collection, CollectionReference, Firestore, addDoc } from '@angular/fire/firestore';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerService } from 'src/app/services/buyer.service';

import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { collectionGroup, documentId } from 'firebase/firestore';


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

  openDialog(value: any) {
    this.dialog.open(DialogElementsDialog, {
      data: {item: value}
    });
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
export class DialogElementsDialog implements OnInit {

item?: any;

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private firestore: Firestore,
    private buyerSerivce: BuyerService,
    ) {  }

  ngOnInit(): void {
    if(this.data && this.data.item){
      this.item = this.data.item
    }
  }
  closeWindow() {
    this.dialog.closeAll();
  }

  enviar() {
    const form = {
      nome: this.item.name,
      valor: this.item.valor,
      desc: this.item.desc
    }
    let colecao = collection(this.firestore, 'comprado')
    //this.buyerSerivce.includeDoc(colecao, form)
    console.log('form:', JSON.stringify(colecao) );


  }

}
