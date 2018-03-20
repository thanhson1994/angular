import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'lts-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer', 'Teleport'];
  model = new HeroComponent(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  constructor() { }

  ngOnInit() {
  }
  onSubmit(heroForm) {
    console.log(heroForm);

  }
}
