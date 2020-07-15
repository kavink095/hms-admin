import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Addadminservice } from '../services/addadminservice';
import { AdminDTO } from '../dtos/admin-dto';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  constructor(private adminservice: Addadminservice) {
  }

  // tslint:disable-next-line: typedef
  get name() {
    // console.log(this.formCreateAdmin.get('name'));
    return this.formCreateAdmin.get('name');
  }

  // tslint:disable-next-line: typedef
  get mail() {
    return this.formCreateAdmin.get('mail');
  }

  // tslint:disable-next-line: typedef
  get repassword() {
    return this.formCreateAdmin.get('repassword');
  }

  // tslint:disable-next-line: typedef
  get contact() {
    return this.formCreateAdmin.get('contact');
  }

  // tslint:disable-next-line: typedef
  get nic() {
    return this.formCreateAdmin.get('nic');
  }
  // formCreateAdmin: FormGroup;
  // tslint:disable-next-line: new-parens
  admin: AdminDTO = new AdminDTO;

  formCreateAdmin = new FormGroup({
    name: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  

  saveAdmin(): void {
    this.name.get('name');
    this.mail.get('mail');
    this.repassword.get('repassword');
    this.contact.get('contact');
    this.nic.get('nic');

    this.admin.adName = this.formCreateAdmin.get('name').value;
    this.admin.adMail = this.formCreateAdmin.get('mail').value;
    this.admin.adPassword = this.formCreateAdmin.get('repassword').value;
    this.admin.adMobile = this.formCreateAdmin.get('contact').value;
    this.admin.adNIC = this.formCreateAdmin.get('nic').value;
    // this.admin.adName = this.formCreateAdmin.get('name').value;
    console.log(this.admin);

    this.adminservice.saveAdmin(this.admin).subscribe(
      
      (result) => {
        if (result || !Validators === null) {
          console.log(this.admin);
          alert('Admin has been saved successfully..');
        } else {
          alert('Failed to save the Admin..');
        }
      }
    );
  }

}
