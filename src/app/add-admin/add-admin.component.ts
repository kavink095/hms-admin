import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Addadminservice } from '../services/addadminservice';
import { AdminDTO } from '../dtos/adminDTO';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  formAddAdmin: FormGroup;


  admins: Array<AdminDTO> = [];
  adminss: Observable<AdminDTO[]>;

  constructor(private adminservices: Addadminservice) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line: typedef
  reloadData() {
    this.adminss = this.adminservices.getAdminsList();
  }

}
