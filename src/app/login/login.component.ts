import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDTO } from '../dtos/adminDTO';
import { Authservice } from '../services/authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: Authservice) { }

  admins: AdminDTO = new AdminDTO;

  login = new FormGroup({
    nic: new FormControl('', Validators.required),
    passwords: new FormControl('', Validators.required),
  });

  
  // admin:AdminDTO = new AdminDTO();
  failed:boolean;

  ngOnInit(): void {
  }

  // this.addDoc.docNIC = this.formAddDoc.get('id').value;

  logins(): void{
    this.admins.adNIC = this.login.get('nic').value;
    this.admins.adPassword = this.login.get('passwords').value;
    this.authService.login(this.admins).subscribe(
      (result)=>{
        this.failed = !result;
      }
    );
  }

}
