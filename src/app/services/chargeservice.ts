
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChargesDTO } from '../dtos/chargesDTO';

export const MAIN_URL = 'http://localhost:8084';
const URL = '/api/v1/charges/saves';

const urls = '/api/v1/charges';


@Injectable()
export class Chargeservice {
    constructor(private http: HttpClient) { }

    saveCharge(charge: ChargesDTO): Observable<boolean> {
        return this.http.post<boolean>(MAIN_URL + URL, charge);
    }

    getAllCharges(): Observable<Array<ChargesDTO>> {
        return this.http.get<Array<ChargesDTO>>(MAIN_URL + urls);
    }
}
