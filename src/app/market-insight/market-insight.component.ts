import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-market-insight',
  templateUrl: './market-insight.component.html',
  styleUrls: ['./market-insight.component.scss']
})
export class MarketInsightComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {

  }

}
