import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lts-thanhson',
  templateUrl: './thanhson.component.html',
  styleUrls: ['./thanhson.component.scss']
})
export class ThanhsonComponent implements OnInit {


  // get price(): number {
  //   this.price = (<HTMLInputElement>event.target).value
  //   return this.price;
  // }
  // get discount(): number {
  //   return this.discount;
  // }
  // get amount(): number {
  //   return this.amount;
  // }
  // isValue;
  // change() {
  //   this.price = (<HTMLInputElement>event.target).value
  //   this.isValue = ((this.price * this.discount) / 100) * this.amount;
  //   return this.isValue;
  // }


  // onKey(event: KeyboardEvent) {
  //   this.order.price = (<HTMLInputElement>event.target).value;

  // }
  // onKey1(event: KeyboardEvent) {
  //   this.order.amount = (<HTMLInputElement>event.target).value;

  // }
  // onKey2(event: KeyboardEvent) {
  //   this.order.discount = (<HTMLInputElement>event.target).value;
  //   this.isValue = ((this.giaSp * this.discount) / 100) * this.soLuong;

  // }
  primerleague = [{
    id: 1,
    club: 'Manchester United',
    played: 38,
    won: 31,
    drawn: 4,
    lost: 3,
    points: 90
  }, {
    id: 2,
    club: 'Manchester City',
    played: 38,
    won: 29,
    drawn: 3,
    lost: 6,
    points: 82
  }, {
    id: 3,
    club: 'Tottenham Hotspur',
    played: 38,
    won: 26,
    drawn: 6,
    lost: 6,
    points: 77
  }, {
    id: 4,
    club: 'Chelsea',
    played: 38,
    won: 25,
    drawn: 8,
    lost: 5,
    points: 70
  }
  ];


  constructor() { }

  ngOnInit() {
  }

}
