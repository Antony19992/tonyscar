import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogChoiceDialog } from './dialog.choice.component';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {

  constructor(private router: Router, public dialog: MatDialog) { }

  validate(code: string){
    if(code == "@entrar"){
      this.router.navigate(['home']);
    }
  }

  openDialog() {
    this.dialog.open(DialogChoiceDialog);
  }

}
