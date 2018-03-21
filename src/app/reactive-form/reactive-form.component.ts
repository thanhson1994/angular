import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { get } from 'http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'lts-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  rfContact: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.createForm();
  }
  createForm() {
    // this.rfContact = this.fb.group({
    //   contactName: this.fb.control('', [Validators.required]),
    //   email: this.fb.control('', [Validators.required]),
    //   password: this.fb.control('', [Validators.required]),
    //   social: this.fb.group({
    //     facebook: this.fb.control(''),
    //     twitter: this.fb.control('')
    //   })
    // });
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

    });
    setTimeout(() => {
      this.rfContact.patchValue({contactName: 'Lê Thanh Sơn', email: 'ltsonht1994@gmail.com' });

    }, 1000);
  }

  onSubmit() {
    console.log(this.rfContact);
    this.rfContact.reset();
    // this.dialogRef.close();
    console.log(this.rfContact.value)

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



