import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BuyerService } from 'src/app/services/buyer.service';
import Swal from 'sweetalert2'
import { NewVeichleDialog } from './new.veichle.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-veichle',
  templateUrl: './veichle.component.html',
  styleUrls: ['./veichle.component.css']
})

export class VeichleComponent implements OnInit {
  
  constructor(private buyerSerivce: BuyerService, private dialog: MatDialog) {}
  
  item$?: Observable<any[]>;
  
  ngOnInit(){
    this.item$ = this.buyerSerivce.getList();
  }

  excluir(item: any){
    Swal.fire({
      title: 'Tem certeza que deseja excluir esse o '+item+'?',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim',
      denyButtonText: `Não`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Veículo excluído', '', 'success')
        this.buyerSerivce.delete('veiculo', item)
      } else if (result.isDenied) {
        Swal.fire('Veículo não excluído', '', 'info')
      }
    })
  }

  openDialog() {
    this.dialog.open(NewVeichleDialog, {
      
    });
  }

}