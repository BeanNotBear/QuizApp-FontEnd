import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  constructor(private apiService: ApiService) { }

  getAllQuizzes() {
    return this.apiService.getQuizes().pipe();
  }
}
