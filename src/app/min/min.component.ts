import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lts-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.scss']
})
export class MinComponent implements OnInit {
  isSpecial = true;

  currentStyles: {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {

    };
  }
  onSave() { }

  constructor() { }

  ngOnInit() {

  }


}
