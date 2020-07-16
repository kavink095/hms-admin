import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Addadminservice } from '../services/addadminservice';
import { AdminDTO } from '../dtos/adminDTO';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  constructor(private adminservice: Addadminservice) {
  }

  // tslint:disable-next-line: new-parens
  admin: AdminDTO = new AdminDTO;
  pwd: string;
  repwd: string;
  chkPw: string;
  chkFlag = false;

  formCreateAdmin = new FormGroup({
    name: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    check: new FormControl('', Validators.required),
    checklbl: new FormControl()
  });
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef


  // tslint:disable-next-line: typedef
  checkPasswordTwoType() {
    this.pwd = this.formCreateAdmin.get('password').value;
    this.repwd = this.formCreateAdmin.get('repassword').value;
    if (this.pwd === this.repwd) {
      // tslint:disable-next-line: no-unused-expression
      // this.formCreateAdmin.get('checklbl').setValue;
      this.chkFlag = true;
    } else {
      // tslint:disable-next-line: no-unused-expression
      // this.formCreateAdmin.get('checklbl').markAsUntouched;
       alert('password cannot match... please re type correctly..!');
    }
  }


  saveAdmin(): void {
    this.admin.adName = this.formCreateAdmin.get('name').value;
    this.admin.adMail = this.formCreateAdmin.get('mail').value;
    this.admin.adPassword = this.formCreateAdmin.get('repassword').value;
    this.admin.adMobile = this.formCreateAdmin.get('contact').value;
    this.admin.adNIC = this.formCreateAdmin.get('nic').value;

    // this.admin.adName = this.formCreateAdmin.get('name').value;
    console.log(this.admin);
    this.checkPasswordTwoType();
    if (this.chkFlag) {
      this.adminservice.saveAdmin(this.admin).subscribe(

        (result) => {

          if (result || !Validators === null) {
            console.log(this.admin);
            alert('Admin has been saved successfully..');
            this.formCreateAdmin.get('name').setValue('');
            this.formCreateAdmin.get('mail').setValue('');
            this.formCreateAdmin.get('password').setValue('');
            this.formCreateAdmin.get('repassword').setValue('');
            this.formCreateAdmin.get('contact').setValue('');
            this.formCreateAdmin.get('nic').setValue('');
            this.formCreateAdmin.get('gender').setValue('');
            this.formCreateAdmin.get('check').setValue('');
            this.formCreateAdmin.get('checklbl').setValue('');
            this.chkFlag = false;
          } else {
            alert('Failed to save the Admin..');
          }
        }
      );
    }

  }

}
