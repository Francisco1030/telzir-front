import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Plan } from '../models/plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Plan[]> {
    const url = `${environment.apiUrl}/plans`;
    return this.http.get<Plan[]>(url);
  }

}
