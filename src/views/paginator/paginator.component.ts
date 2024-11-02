import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {PaginatorModel} from "../../models/paginator.model";
import {PaginatedResultModel} from "../../models/paginated-result.model";
import {QuizViewModel} from "../../models/quiz-view.model";
import {QuizFilterModel} from "../../models/quiz-filter.model";

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    NzPaginationComponent
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input({required: true}) paginatedResult!: PaginatedResultModel<QuizViewModel>;
  @Input({required: true}) quizFilter!: QuizFilterModel;
  @Output() raiseQuizFilter = new EventEmitter<QuizFilterModel>();

  recordsPerPage: number[] = [5, 10, 15, 20];
  pageTotal = 100;

  onChangePageIndex(pageIndex: number) {
    this.quizFilter.PageNumber = pageIndex;
    this.raiseQuizFilter.emit(this.quizFilter);
  }

  onChangePageSize(pageSize: number) {
    this.quizFilter.PageSize = pageSize;
    this.raiseQuizFilter.emit(this.quizFilter);
  }
}
