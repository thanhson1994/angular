import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lts-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string) { }

  ngOnInit() {
  }

}
