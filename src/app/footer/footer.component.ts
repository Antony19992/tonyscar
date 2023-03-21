import { Component } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {label:'SixSeven'},
          {label:'Revenda'},
          {label:'Início'},
      ];
  }
}
