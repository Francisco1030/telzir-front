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

  findBySource(source: string): Observable<Call[]> {
    const url = `${environment.apiUrl}/calls/${source}`;
    return this.http.get<Call[]>(url);
  }
}
