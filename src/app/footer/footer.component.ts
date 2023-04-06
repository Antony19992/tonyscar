import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public items: MenuItem[] = [];
  urlpath = '';

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.urlpath = this.route.snapshot.params['path'];
    console.log('caminho: '+this.urlpath)
      this.items = [
          {label:this.urlpath},
          {label:this.urlpath},
          {label:this.urlpath},
      ];
  }
}
