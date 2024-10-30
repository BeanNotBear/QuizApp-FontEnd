import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  }
  baseUrl: string = "https://localhost:7078/api"

  constructor(private httpClient: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + "/Auth/Login", data).pipe(delay(1000));
  }

  register(data: any): Observable<any> {
    return this.httpClient.post<boolean>(this.baseUrl + "/Auth/Register", data).pipe(delay(1000));
  }
}
