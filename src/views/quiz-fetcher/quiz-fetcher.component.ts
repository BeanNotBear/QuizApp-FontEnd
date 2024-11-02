import { Component } from '@angular/core';
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {FormsModule} from "@angular/forms";
import {PaginatorComponent} from "../paginator/paginator.component";
import {QuizFilterComponent} from "../quiz-filter/quiz-filter.component";
import {PaginatorModel} from "../../models/paginator.model";
import {QuizzesService} from "../../services/quizzes.service";
import {PaginatedResultModel} from "../../models/paginated-result.model";
import {QuizViewModel} from "../../models/quiz-view.model";
import {QuizFilterModel} from "../../models/quiz-filter.model";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-quiz-fetcher',
  standalone: true,
  imports: [
    NzPaginationComponent,
    FormsModule,
    PaginatorComponent,
    QuizFilterComponent
  ],
  templateUrl: './quiz-fetcher.component.html',
  styleUrl: './quiz-fetcher.component.scss'
})
export class QuizFetcherComponent {
  result!: PaginatedResultModel<QuizViewModel>;
  quizParam: QuizFilterModel = new QuizFilterModel();

  constructor(private quizzesService: QuizzesService, private loaderService: LoaderService) {
    this.fetchQuizzes(this.quizParam);
  }

  onPaging(quizFilter: QuizFilterModel) {
    this.quizParam = quizFilter;
    this.fetchQuizzes(this.quizParam);
  }

  fetchQuizzes(quizParam: QuizFilterModel) {
    this.loaderService.requestStarted();
    this.quizzesService.getQuizzesByFilter(quizParam).subscribe({
      next: (pageResult) => {
        this.result = pageResult;
        this.quizParam.PageNumber = this.result.pageIndex;
        // this.quizParam.PageSize = th;
        console.log(this.result)
        this.loaderService.requestEnded();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
