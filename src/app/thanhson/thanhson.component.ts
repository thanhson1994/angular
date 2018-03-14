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

  constructor() { }

  ngOnInit() {
  }

}
