import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const MODULE = [
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatRadioModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSlideToggleModule
];


@NgModule({
  imports: [
    CommonModule,
    ...MODULE

  ],
  exports: [
    ...MODULE
  ],
  declarations: []
})
export class ImportModule { }
