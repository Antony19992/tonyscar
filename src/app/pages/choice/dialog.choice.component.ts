import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'dialog-elements-dialog',
  templateUrl: './dialog.choice.html',
})
export class DialogChoiceDialog {

item?: any;
veiculos: string = 'veiculo';
codigo?: any;

  constructor(private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    ) {  }

  closeWindow() {
    this.dialog.closeAll();
  }

  validate(code: string){
    if(code == "@entrar"){
      this.dialog.closeAll();
      this.router.navigate(['edit']);
    }else{
      this.dialog.closeAll();
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Código incorreto',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['choice']);
    }
  }

}
