import { Component, OnInit } from '@angular/core';
import { QuizzesService } from "../../services/quizzes.service";
import { QuizModel } from "../../models/quiz.model";
import {TableComponent} from "../table/table.component";
import {ColumnDirective} from "../../directives/column.directive";
import {HeaderDirective} from "../../directives/header.directive";
import {CellDirective} from "../../directives/cell.directive";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [
    TableComponent,
    ColumnDirective,
    HeaderDirective,
    CellDirective,
    NzDividerComponent,
    NgIf,
  ],
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  rows: QuizModel[] = [];
  page: number = 1;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 15, 25];
  test = false;

  constructor(private quizService: QuizzesService) {

  }

  ngOnInit(): void {
    this.fetchQuizzes();
  }

  fetchQuizzes() {
    this.quizService.getAllQuizzes().subscribe({
      next: (quizzes) => {
        this.rows = quizzes;
      },
      error: (error) => {
        console.error('Error fetching quizzes:', error);
      }
    });
  }
}
