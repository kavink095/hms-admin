import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppointmentDTO } from '../dtos/appointmentDTO';
import { AppointmentService } from '../services/appointmentService';
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

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }
  reloadData() {
    this.apointss = this.appointmentService.getAppointmentList();
  }

}
