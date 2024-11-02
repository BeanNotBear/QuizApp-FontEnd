import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {QuizModel} from "../models/quiz.model";
import {PaginatedResultModel} from "../models/paginated-result.model";
import {QuizViewModel} from "../models/quiz-view.model";
import {QuizFilterModel} from "../models/quiz-filter.model";

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

  getQuizzesPaging(quizParam: QuizFilterModel): Observable<PaginatedResultModel<QuizViewModel>> {
    let params = new HttpParams()
      .set('SearchByTitle', quizParam.SearchByTitle ?? '')
      .set('OrderBy', quizParam.OrderBy ?? '')
      .set('PageNumber', quizParam.PageNumber.toString())
      .set('PageSize', quizParam.PageSize.toString())

    if(quizParam.IsActive !== null && quizParam.IsActive !== 'null') {
      params = params.set('IsActive', quizParam.IsActive.toString())
    }
    if(quizParam.Duration !== null) {
      params = params.set('Duration', quizParam.Duration.toString())
    }
    if(quizParam.IsDescending !== null) {
      params = params.set('IsDescending', quizParam.IsDescending.toString())
    }
    return this.httpClient.get<PaginatedResultModel<QuizViewModel>>(`${this.baseUrl}/Quizes/spec`, {
      ...this.httpOptions,
      params
    }).pipe(delay(200));
  }
}
