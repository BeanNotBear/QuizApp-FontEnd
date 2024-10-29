import { Component, OnInit } from '@angular/core';
import { QuizzesService } from "../../services/quizzes.service";
import { QuizModel } from "../../models/quiz.model";

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [],
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  quizzes: QuizModel[] = [];

  constructor(private quizService: QuizzesService) {}

  ngOnInit(): void {
    this.fetchQuizzes();
  }

  fetchQuizzes() {
    this.quizService.getAllQuizzes().subscribe({
      next: (quizzes) => {
        this.quizzes = quizzes;
      },
      error: (error) => {
        console.error('Error fetching quizzes:', error);
      }
    });
  }
}
