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
  //  list = {name: 'Lê Thanh Sơn',
  // email: 'ltsonht1994@gmail.com', password: '********', facebook: 'facebook.com'         };
  data: any;
  rfContact: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.createForm();
  }
  createForm() {

  }

  ngOnInit() {
    this.rfContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      social: this.fb.group({
        facebook: '',

      })


    });
    // setTimeout(() => {
    //   this.rfContact.patchValue({contactName: 'Lê Thanh Sơn', email: 'ltsonht1994@gmail.com' });

    // }, 1000);
  }

  onSubmit() {
    // Submit form. Lấy dữ liệu đã submit đi mô đó...
   this.data = this.rfContact ;
    console.log(this.rfContact);
    // this.rfContact.reset();
    // this.dialogRef.close();
    console.log(this.rfContact.value) ;

  }

  rebuildForm() {
    // Lấy lại dữ liệu đã submit

    // this.rfContact = this.data;
      }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }


}
