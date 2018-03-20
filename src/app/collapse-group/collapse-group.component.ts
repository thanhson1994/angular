import { Component, OnInit, ContentChild, AfterContentInit, Input, ContentChildren, OnDestroy } from '@angular/core';
import { CollapseComponent } from '../collapse/collapse.component';
import { QueryList } from '@angular/core';
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'lts-collapse-group',
  templateUrl: './collapse-group.component.html',
  styleUrls: ['./collapse-group.component.scss']
})
export class CollapseGroupComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(CollapseComponent) collapses: QueryList<CollapseComponent>;
  @Input() multiple: boolean = true;

  private _subscription: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.collapses.forEach(collapse => {
      let subscription = collapse.selectedChange.subscribe(coll => {
        if (!this.multiple && coll.selected) {
          this.toggleCollapse(coll);
        }
      });
      this._subscription.push(subscription);

    });

  }
  toggleCollapse(collapse) {
    this.collapses.forEach(c => {
      if (c.collapseId != collapse.collapseId) {
        c.selected = false;
      }
    })
  }
  ngOnDestroy() {
    this._subscription.forEach(sub => sub.unsubscribe());
  }
}
