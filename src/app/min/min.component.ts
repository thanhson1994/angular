import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lts-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.scss']
})
export class MinComponent implements OnInit {

  avatarUrl = 'Thanh Sơn 123' ;
  name: String = 'Lê Thanh Sơn';
  val = 0;
  contacts = [{
    name: 'Lê Thanh Sơn',
    id: 1
  },
  {
    name: 'Anthony Martial',
    id: 2
  },
  {
    name: 'Paul Pogba',
    id: 3
  }



  ];
  countColor = 0;
  isColor = true;
  canSave = false;
  isSpecial = true;
  isValue;
  price;
  amount;
  discount;
  currentClass: {};
  currentStyles: {};
  setCurrentClass() {
    // CSS styles: set per current state of component properties
    this.currentClass = {
      'special': this.isSpecial,
      'size': this.canSave
    };
    return this.currentClass;
  }
  setCurrentStyles() {
    this.currentStyles = {
      'color': this.isSpecial ? 'red' : 'blue',
      'font-size': this.canSave ? '30px' : '50px'
    };
    return this.currentStyles;
  }
  onKey(event: KeyboardEvent) {
    this.price = (<HTMLInputElement>event.target).value;
    this.calc();
  }
  private calc() {
    if (this.price && this.amount && this.discount) {
      this.isValue = ((this.price * (100 - this.discount)) / 100) * this.amount;
    }
  }
  onKey1(event: KeyboardEvent) {
    this.amount = (<HTMLInputElement>event.target).value;
    this.calc();
  }
  onKey2(event: KeyboardEvent) {
    this.discount = (<HTMLInputElement>event.target).value;
    this.calc();

  }

  onSave() { }

  constructor() { }

  ngOnInit() {
  }
  addAvalue(event) {
    this.countColor++;
    this.val++;
    if (this.countColor % 2 === 0) {
      this.isColor = true;
    } else { this.isColor = false; }
  }


}
