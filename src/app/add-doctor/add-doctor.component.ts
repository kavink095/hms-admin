import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Adddoctorservice } from '../services/adddoctorservice';
import { Addadminservice } from '../services/addadminservice';
import { AddDoctorDTO } from '../dtos/add-doctorDTO';
import { AdminDTO } from '../dtos/adminDTO';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  // tslint:disable-next-line: new-parens
  addDoc: AddDoctorDTO = new AddDoctorDTO;
  admins: Array<AdminDTO> = [];
  adminss: Observable<AdminDTO[]>;

  selectedcategories: AdminDTO = new AdminDTO();
  tempcat: AdminDTO = null;

  constructor(private adddocservice: Adddoctorservice, private adminservices: Addadminservice) {

   }

  formAddDoc = new FormGroup({
    id: new FormControl('', Validators.required),
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    chargeid: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    catid: new FormControl('', Validators.required),
    adminid: new FormControl('', Validators.required),
    check: new FormControl(),
  });

  ngOnInit(): void {
    this.reloadData();
  }

  saveDoctor(): void {
    this.addDoc.docNIC = this.formAddDoc.get('id').value;
    this.addDoc.docFirstName = this.formAddDoc.get('fName').value;
    this.addDoc.docLastName = this.formAddDoc.get('lName').value;
    this.addDoc.docMail = this.formAddDoc.get('mail').value;
    this.addDoc.docMobile = this.formAddDoc.get('contact').value;
    this.addDoc.adNIC = this.formAddDoc.get('adminid').value;
    this.addDoc.cID = this.formAddDoc.get('chargeid').value;
    this.addDoc.catID = this.formAddDoc.get('catid').value;


    this.adddocservice.saveAdmin(this.addDoc).subscribe(
      (result) => {
        if (result || !Validators === null) {
          console.log(this.addDoc);
          alert('New category value has been saved successfully..');
          this.formAddDoc.get('id').setValue('');
          this.formAddDoc.get('fName').setValue('');
          this.formAddDoc.get('lName').setValue('');
          this.formAddDoc.get('mail').setValue('');
          this.formAddDoc.get('contact').setValue('');
          this.formAddDoc.get('adminid').setValue('');
          this.formAddDoc.get('chargeid').setValue('');
          this.formAddDoc.get('catid').setValue('');
        } else {
          alert('Failed to save the category value..');
        }
      }
    );
  }

  // loadAllAdmins(): void {
  //   this.adminservices.getAllAdmins().subscribe(
  //     (result) => {
  //       console.log(this.admins);
  //       this.admins = result;
  //       console.log(this.admins);
  //     }
  //   );
  // }
  // tslint:disable-next-line: typedef
  reloadData() {
    this.adminss = this.adminservices.getEmployeesList();
  }

}
