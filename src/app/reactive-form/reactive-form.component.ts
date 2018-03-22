import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
// import { get } from 'http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'lts-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
   list = {name: 'Lê Thanh Sơn',
  email: 'ltsonht1994@gmail.com', password: '********', facebook: 'facebook.com'         };
  data: any;
  rfContact: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.createForm();
  }
  createForm() {

  }

  rebuildForm() {
this.rfContact = this.data;
  }

  ngOnInit() {
    this.rfContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      social: this.fb.group({
        facebook: '',

      }),
      tels: this.fb.array([
        this.fb.control('')
      ])

    }, {updateOn: 'submit'});
    setTimeout(() => {
      this.rfContact.patchValue({contactName: 'Lê Thanh Sơn', email: 'ltsonht1994@gmail.com' });

    }, 1000);
  }

  onSubmit() {
   this.data = this.rfContact ;
    console.log(this.rfContact);
    this.rfContact.reset();
    // this.dialogRef.close();
    console.log(this.rfContact.value) ;

  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

get tels(): FormArray {
  return this.rfContact.get('tels') as FormArray;
}

addTel() {
  this.tels.push(this.fb.control(''));
}

removeTel(index: number) {
  this.tels.removeAt(index);
}
}
