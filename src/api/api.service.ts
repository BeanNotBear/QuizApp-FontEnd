import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuizModel} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://localhost:7078/api";
  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  constructor(private httpClient: HttpClient) {
  }

  getQuizes(): Observable<QuizModel[]> {
    return this.httpClient.get<QuizModel[]>(`${this.baseUrl}/Quizes`, this.httpOptions);
  }
}
