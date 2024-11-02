import {Injectable} from '@angular/core';
import {ApiService} from "../api/api.service";
import {QuizFilterModel} from "../models/quiz-filter.model";
import {PaginatedResultModel} from "../models/paginated-result.model";
import {QuizViewModel} from "../models/quiz-view.model";

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  constructor(private apiService: ApiService) {
  }

  getAllQuizzes() {
    return this.apiService.getQuizes().pipe();
  }

  getQuizzesByFilter(quizParam: QuizFilterModel) {
    return this.apiService.getQuizzesPaging(quizParam);
  }
}
