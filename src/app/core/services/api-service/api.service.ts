import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { T } from 'node_modules/@angular/common/common_module.d-Qx8B6pmN';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/enviroments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public getWithHeader<T>(url: string, header: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { headers: header });
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }

  public put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body);
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
