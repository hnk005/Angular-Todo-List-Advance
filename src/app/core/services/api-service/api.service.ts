import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/enviroments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`);
  }

  public getWithHeader(url: string, header: HttpHeaders): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`, { headers: header });
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, body);
  }

  public put(url: string, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, body);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`);
  }
}
