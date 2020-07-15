
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminDTO } from '../dtos/admin-dto';

export const MAIN_URL = 'http://localhost:8084';
const URL = '/api/v1/admins/saves';

@Injectable()
export class Addadminservice {

    constructor(private http: HttpClient) { }

    saveAdmin(admin: AdminDTO): Observable<boolean> {
        return this.http.post<boolean>(MAIN_URL + URL, admin);
    }
}
