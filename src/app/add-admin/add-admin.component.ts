import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdminDTO } from '../dtos/adminDTO';
import { Addadminservice } from '../services/addadminservice';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  // formAddAdmin: FormGroup;


  admins: Array<AdminDTO> = [];
  adminss: Observable<AdminDTO[]>;

  constructor(private adminservice: Addadminservice) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line: typedef
  reloadData() {
    this.adminss = this.adminservice.getEmployeesList();
  }

}
