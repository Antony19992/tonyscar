import { Component } from '@angular/core';
import { BuyerService } from 'src/app/services/buyer.service';

import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2'

@Component({
  selector: 'new-veichle-dialog',
  templateUrl: './new.veichle.component.html',
})
export class NewVeichleDialog {

item?: any;
veiculos: string = 'veiculo';
public veiculo: string = ''; 
public cor: string = ''; 
public valor: string = ''; 
public desc: string = ''; 


  constructor(
    private dialog: MatDialog,
    private buyerSerivce: BuyerService,
    ) {  }

  closeWindow() {
    this.dialog.closeAll();
  }

  incluirVeiculo(){
    const form = {
        veiculo: this.veiculo,
        cor: this.cor,
        valor: this.valor,
        desc: this.desc
      }
    this.buyerSerivce.insertDoc(this.veiculos, this.veiculo, form)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Incluído com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
    this.dialog.closeAll();
  }

}
