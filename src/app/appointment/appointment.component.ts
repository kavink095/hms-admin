import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppointmentDTO } from '../dtos/appointmentDTO';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  formApointment: FormGroup;


  apoints: Array<AppointmentDTO> = [];
  apointss: Observable<AppointmentDTO[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
