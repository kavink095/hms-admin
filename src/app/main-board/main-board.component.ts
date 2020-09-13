import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Authservice } from '../services/authservice';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {
  // formMain: FormGroup;

  constructor(private authService : Authservice) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
