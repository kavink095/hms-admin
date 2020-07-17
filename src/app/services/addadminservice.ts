
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminDTO } from '../dtos/adminDTO';

export const MAIN_URL = 'http://localhost:8084';
const urls = '/api/v1/admins';
const URL = '/api/v1/admins/saves';

// const baseUrl = 'localhost:8084/api/v1/admins';

@Injectable()
export class Addadminservice {
    // baseUrl: any;

    constructor(private http: HttpClient) { }

    saveAdmin(admin: AdminDTO): Observable<boolean> {
        return this.http.post<boolean>(MAIN_URL + URL, admin);
    }
    // getAllAdmins(): Observable<Array<AdminDTO>> {
    //     return this.http.get<Array<AdminDTO>>(MAIN_URL + urls);
    // }
    getEmployeesList(): Observable<any> {
        return this.http.get(MAIN_URL + urls);
    }
}
