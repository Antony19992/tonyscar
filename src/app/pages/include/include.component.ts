import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-include',
  templateUrl: './include.component.html',
  styleUrls: ['./include.component.css']
})
export class IncludeComponent implements OnInit {

  userId?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = (this.route.snapshot.paramMap.get('id') || '');
  }

}
