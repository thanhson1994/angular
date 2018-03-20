import { Component, OnInit, Input, ViewEncapsulation, Output } from '@angular/core';
import { EventEmitter } from 'events';
export interface DataCollapseChange {
  collapseId: string;
  selected: boolean;
}
let uuid = 1;

@Component({
  selector: 'lts-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CollapseComponent implements OnInit {
  @Input() title = '';
  @Input() selected = false;
  @Output() selectedChange: EventEmitter<DataCollapseChange> = new EventEmitter<DataCollapseChange>();
  private _id: number;

  constructor() { }

  ngOnInit() {
    this._id = ++uuid;
  }
  get collapseId() {
    return 'lts-collapse-' + this._id;

  }

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit({
      collapseId: this.collapseId,
      selected: this.selected
    })
  }

}
