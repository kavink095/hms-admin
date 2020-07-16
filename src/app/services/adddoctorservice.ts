
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddDoctorDTO } from '../dtos/add-doctorDTO';

export const MAIN_URL = 'http://localhost:8084';
const URL = '/api/v1/doctors/saves';
@Injectable()
export class Adddoctorservice {

    constructor(private http: HttpClient) { }

    saveAdmin(addDoc: AddDoctorDTO): Observable<boolean> {
        return this.http.post<boolean>(MAIN_URL + URL, addDoc);
    }
}
