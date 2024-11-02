import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {QuizFilterModel} from "../../models/quiz-filter.model";
import {QuizzesService} from "../../services/quizzes.service";
import {PaginatedResultModel} from "../../models/paginated-result.model";
import {QuizViewModel} from "../../models/quiz-view.model";

@Component({
  selector: 'app-quiz-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './quiz-filter.component.html',
  styleUrl: './quiz-filter.component.scss'
})
export class QuizFilterComponent {
  @Output() raiseQuizParam = new EventEmitter<QuizFilterModel>();
  @Input({required: true}) quizParam!: QuizFilterModel;
  constructor() {
    this.raiseQuizParam.emit(this.quizParam)
  }
  onFilter() {
    this.raiseQuizParam.emit(this.quizParam)
  }
}
