import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
<<<<<<< HEAD
import { Addadminservice } from '../services/addadminservice';
import { AdminDTO } from '../dtos/adminDTO';
import { Observable } from 'rxjs';
=======
import { Observable } from 'rxjs';
import { AdminDTO } from '../dtos/adminDTO';
import { Addadminservice } from '../services/addadminservice';
>>>>>>> ee2d70436b27e0aec2e7bc840534519dd709a10a

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  // formAddAdmin: FormGroup;

<<<<<<< HEAD
  admins: Array<AdminDTO> = [];
  adminss: Observable<AdminDTO[]>;

  constructor( private adminservices: Addadminservice) { }
=======

  admins: Array<AdminDTO> = [];
  adminss: Observable<AdminDTO[]>;

  constructor(private adminservice: Addadminservice) { }
>>>>>>> ee2d70436b27e0aec2e7bc840534519dd709a10a

  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line: typedef
  reloadData() {
<<<<<<< HEAD
    this.adminss = this.adminservices.getEmployeesList();
=======
    this.adminss = this.adminservice.getEmployeesList();
>>>>>>> ee2d70436b27e0aec2e7bc840534519dd709a10a
  }

}
