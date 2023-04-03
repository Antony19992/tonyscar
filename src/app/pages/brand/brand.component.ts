import { collection, Firestore } from '@angular/fire/firestore';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerService } from 'src/app/services/buyer.service';

import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  item$?: Observable<any[]>;
  public minhaVariavel: string = 'Valor da minha variável';

  data = { pais: 'Brasil', nome: 'Paraná' }

  constructor(
    private buyerSerivce: BuyerService,
    private firestore: Firestore,
    public dialog: MatDialog,
    private router: Router
    ) {
  }

  openDialog(param: any) {
    const url = '/include/'+param
    let info = this.router.navigateByUrl(url);
    console.log("rota "+url)
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
  @Input() minhaVariavel?: string;
  closeWindow() {
    this.dialog.closeAll();
  }
}
