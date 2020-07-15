import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  formCreateAdmin: FormGroup;
  constructor() {
  }
  ngOnInit(): void {
    this.formCreateAdmin = new FormGroup({
      name: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      nic: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });
  }

}
