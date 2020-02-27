import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Call } from '../models/call';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Call[]> {
    const url = `${environment.apiUrl}/calls`;
    return this.http.get<Call[]>(url);
  }

  findBySource(source: string): Observable<Call[]> {
    const url = `${environment.apiUrl}/calls/${source}`;
    return this.http.get<Call[]>(url);
  }

  calculatePrice(call: Call): Observable<Call> {
    const url = `${environment.apiUrl}/calls/calulate`;
    return this.http.post<Call>(url, call);
  }

}
