import { collection, Firestore } from '@angular/fire/firestore';
import { Component, Inject, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/services/buyer.service';

import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2'

@Component({
  selector: 'dialog-elements-dialog',
  templateUrl: './dialog.elements.html',
})
export class DialogElementsDialog implements OnInit {

item?: any;
veiculos: string = 'veiculo';

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

  enviar(doc: string) {
    const form = {
      name: this.item.name,
      valor: this.item.valor,
      desc: this.item.desc
    }
      let colecao = collection(this.firestore, this.veiculos);
      console.log('form:', JSON.stringify(colecao) );
      this.buyerSerivce.updateDoc(this.veiculos, doc, form);
      this.dialog.closeAll();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compra realizada',
        showConfirmButton: false,
        timer: 1500
      })
  }

}
