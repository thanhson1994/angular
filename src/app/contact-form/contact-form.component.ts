import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lts-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contact = {
    contactName: '',
    email: '',
    password: '',
    facebook: '',
    tel: ''

  };

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(form);
    throw Error('Something went wrong');
   }
}
