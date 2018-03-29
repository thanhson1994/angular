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
   list = {name: '',
  email: '', password: '', facebook: ''};
  name: string;
  email: '';
  password: '';
  data: any;
  rfContact: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.createForm();
  }
  createForm() {

  }

  ngOnInit() {
    this.rfContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      facebook: ['', Validators.required]    });

  }

  onSubmit() {
    // Submit form. Lấy dữ liệu đã submit
  //  this.list.name = this.rfContact.value.contactName.toString() ;
  //  this.list.email = this.rfContact.value.email;
   this.name = this.rfContact.value.contactName.toString();
   this.email = this.rfContact.value.email;
   this.list.password = this.rfContact.value.password;
   this.list.facebook = this.rfContact.value.facebook;



    console.log(this.rfContact);
    this.rfContact.reset();
   console.log(this.list.name);

    // this.dialogRef.close();
    console.log(this.rfContact) ;
    return this.list;


  }


  rebuildForm() {
    console.log(this.list.email);
    console.log(this.list.name);


    //  this.rfContact.value = this.data;
    setTimeout(() => {
      console.log(this.list.email) ;
      this.rfContact.patchValue({
        contactName : `${this.name}` , email: `${this.email}` , password: this.list.password, facebook:   this.list.facebook });

    }, 1000);
    // Lấy lại dữ liệu đã submit

    // this.rfContact = this.data;
      }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }


}
