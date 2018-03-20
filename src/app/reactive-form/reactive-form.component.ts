import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lts-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  rfContact: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.rfContact = this.fb.group({
      contactName: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      social: this.fb.group({
        facebook: this.fb.control(''),
        twitter: this.fb.control('')
      })
    });
  }

  ngOnInit() {
    this.rfContact = new FormGroup({
      contactName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      social: new FormGroup({
        facebook: new FormControl(),
        twitter: new FormControl()
      })

    });
  }
  onSubmit() {
    console.log(this.rfContact);

  }
}
