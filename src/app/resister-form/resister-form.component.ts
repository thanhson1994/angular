import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
return (users.includes(c.value)) ? {
 invalidusername : true
} : null ;
  };
}
export function comparePassword(c: AbstractControl) {
const v = c.value;
return(v.password === v.confirmPassword) ? null : { passwordnotmatch: true};
}



@Component({
  selector: 'lts-resister-form',
  templateUrl: './resister-form.component.html',
  styleUrls: ['./resister-form.component.scss']
})
export class ResisterFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, forbiddenUsername(['admin', 'manager'])]],
      pw: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {validators: comparePassword})
    });
  }
  onSubmit() {
    console.log(this.form);
  }

}
