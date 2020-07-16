import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../dtos/categoryDTO';

export const MAIN_URL = 'http://localhost:8084';
const URL = '/api/v1/categories/saves';


@Injectable()
export class Categoryservice {
    constructor(private http: HttpClient) { }

    saveAdmin(cat: CategoryDTO): Observable<boolean> {
        return this.http.post<boolean>(MAIN_URL + URL, cat);
    }
}
