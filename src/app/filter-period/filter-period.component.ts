import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-filter-period',
  templateUrl: './filter-period.component.html',
  styleUrls: ['./filter-period.component.scss']
})
export class FilterPeriodComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  show: boolean = false;
  today: any;
  startDate: any;
  endDate: any;

  constructor() { }

  ngOnInit(): void {

  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(type , ":",  event.value);
  }

  showTable() {
    this.show = !this.show;
    console.log(this.show);
  }

  setPeriod(type: string) {
    if(type == '1') {
      this.today =  new Date();
      let start = new Date(this.today);
      start.setDate(start.getDate() - 1);
      this.startDate = start;
      this.endDate = this.today;
    }

    if(type == '7') {
      this.today =  new Date();
      let start = new Date(this.today);
      start.setDate(start.getDate() - 7);
      this.startDate = start;
      this.endDate = this.today;
    }

    if(type == '30') {
      this.today =  new Date();
      let start = new Date(this.today);
      start.setDate(start.getDate() - 30);
      this.startDate = start;
      this.endDate = this.today;
    }

    // if(type == 'Month') {
    //   this.today =  new Date();
    //   let start = new Date(this.today);
    //   start.setDate(start.getDate() - );
    //   this.startDate = start;
    //   this.endDate = today;
    // }
  }

}
