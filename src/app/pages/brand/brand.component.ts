import { collection, Firestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerService } from 'src/app/services/buyer.service';

import {MatDialog} from '@angular/material/dialog';
import { DialogElementsDialog } from './dialog.component';



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

  ngOnInit(){
    this.item$ =  this.buyerSerivce.getList();
  }

  openDialog(value: any) {
    this.dialog.open(DialogElementsDialog, {
      data: {item: value}
    });
  }

  add(){
    let colecao = collection(this.firestore, 'tinhaNao')
    this.buyerSerivce.includeDoc(colecao, this.data)
  }




}
