import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: '[lts-special]',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit, AfterViewInit {

  @Input()
  isSpecial: boolean;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.isSpecial = !this.isSpecial;
    this.cdr.detectChanges();
  }

}
