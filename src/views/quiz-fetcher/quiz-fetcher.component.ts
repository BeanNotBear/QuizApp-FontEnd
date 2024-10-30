import { Component } from '@angular/core';
import {NzPaginationComponent} from "ng-zorro-antd/pagination";

@Component({
  selector: 'app-quiz-fetcher',
  standalone: true,
  imports: [
    NzPaginationComponent
  ],
  templateUrl: './quiz-fetcher.component.html',
  styleUrl: './quiz-fetcher.component.scss'
})
export class QuizFetcherComponent {

}
