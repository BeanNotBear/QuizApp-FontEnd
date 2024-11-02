export class QuizFilterModel {
  SearchByTitle: string = '';
  IsActive: boolean | string | null = null;
  Duration: number | null = null;
  OrderBy: string = '';
  IsDescending: boolean | null = false;
  PageNumber: number = 1;
  PageSize: number = 5;
}
