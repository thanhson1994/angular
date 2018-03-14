import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lts-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.scss']
})
export class MinComponent implements OnInit {
  name: String = 'Lê Thanh Sơn';
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
  canSave = false;
  isSpecial = true;
  isValue;
  giaSp;
  soLuong;
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
    this.giaSp = (<HTMLInputElement>event.target).value;

  }
  onKey1(event: KeyboardEvent) {
    this.soLuong = (<HTMLInputElement>event.target).value;

  }
  onKey2(event: KeyboardEvent) {
    this.discount = (<HTMLInputElement>event.target).value;
    this.isValue = ((this.giaSp * (100 - this.discount) / 100) * this.soLuong;

  }

  onSave() { }

  constructor() { }

  ngOnInit() {
  }


}
